---
layout: post
title:      "Playing with AWS Services Part II - Hola Shenron!"
date:       2020-04-17 19:31:03 -0400
permalink:  aws_pt2
---

> Playing with AWS Services Part II - Hola Shenron!

**Note:** This is a continuation to my last blog on [**TTS with AWS**](http://fbohz.com/aws_polly) implemented on the Yijing Ball Z (YBZ). 

Now that with AWS we can read text out loud, How about we implement `AWS.Translate` so we can improve our Duolingo listening skills and the let Polly read our translated Yijing text! 

Again, if you don't know how to setup AWS with Vanilla JS, read the [previous](http://fbohz.com/aws_polly) blog to get your AWS SDK setup. 

1) To start, let's instatiate our `AWS.Translate` variable so we can use it.

```js
var translate = new AWS.Translate({region: 'us-east-1'});
```
   - Your config region is important, so use the one appropiate to your own region configuration.
  
2)  Let's implement a [**Bulma modal**](https://bulma.io/documentation/components/modal/) on our navbar that when clicked will give us the option to translate the text.

```html
                  <div class="modal">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                      <!-- Read on Bulma documentation to learn how to implement -->
                      <a style="display: none;"class="navbar-item button is-small is-warninig readTr">
                      </a> &nbsp;                     
                      <a class="es navbar-item button is-small is-success translate">
                        Español
                      </a>
                      &nbsp;
                      <a class="pt navbar-item button is-small is-primary translate">
                        Portugues
                      </a>
                    </br><p id="tr-content" style="color: white"></p>
                    </div>
                    <button class="modal-close"></button>
                  </div>

```

3) Add eventListeners to our modal so it can be displayed shown. From Bulma documentation we need to add the `is-active` class to show the modal and remove it once its closed. We also need to make our buttons inside the modal visible.

```js
    document.getElementById("showModal").addEventListener('click', function(e){
        const ptBtn = document.querySelector(".pt")
        ptBtn.style.display = "block"
        const esBtn = document.querySelector(".es")
        esBtn.style.display = "block"
        modal.classList.add("is-active")
    })

    document.querySelector(".modal-close").addEventListener('click', function(e){
       document.getElementById("tr-content").textContent = ""
       readTr.style.display = "none"
        modal.classList.remove("is-active")
  })

```

   - Here's how our modal is showing and closing at this point.

![img](./imgs/aws2.1.gif)

4) Now that the basic navigation is setup. Let's implement our text translation, basically I will implement it on the main YBZ content area, so whatever is there will be translated.

   - We'll be using `translateText` from AWS.Translate, so read up on [documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Translate.html) to learn more.
   - This implementation traverses the DOM under my `main.content` and calls `translateText` on each node that has text. 
   - I added the following code under our modal eventListiner.

```js

        const lang = document.querySelectorAll(".translate")
        
        lang.forEach(function(btn) {
            btn.addEventListener("click", function(e){
                let target = ""
                if (btn.classList.contains("es")) {
                    target = "es"
                    ptBtn.style.display = "none"
                } else {
                    target = "pt"
                    esBtn.style.display = "none"
                }

                document.querySelector("main.content").childNodes.forEach(node => {
                    if (typeof node.textContent.trim() === 'string' && node.textContent.trim().length > 0) {
                        let params = {
                            Text: node.innerText,
                            SourceLanguageCode: 'auto',
                            TargetLanguageCode: target
                        };
                        
                         
                        translate.translateText(params, function (err, data) {
                            if (err) {
                                console.log(err, err.stack);
                                alert("Error calling Amazon Translate. " + err.message);
                                return;
                            }
                            if (data) {
                                document.getElementById("tr-content").innerText = data.TranslatedText
                            } 
                        })
                    }
                })
            })    
        
        })

```

5) Phew! Lets now let Polly read our added translation. Should be same implementation as the previous blog. 

   - We will be displaying a new button that informs the user they can have the text be read our loud to in the language specified.
   - We will be adding an eventListener on this new button that when clicked depending on the language will set the Polly voice according to the target language and call our `doSynthesize` function (from last blog entry) with the appropiate language voice. 
   - Below you'll find the whole implementation with Polly implemented.

```js
    let translate = new AWS.Translate({region: AWS.config.region});
    var polly = new AWS.Polly();

    const pollyBtn = document.querySelector(".readpolly")
    const modal = document.querySelector(".modal")
    const readTr = document.querySelector(".readTr")
    
    document.getElementById("showModal").addEventListener('click', function(e){
        const ptBtn = document.querySelector(".pt")
        ptBtn.style.display = "block"
        const esBtn = document.querySelector(".es")
        esBtn.style.display = "block"

        modal.classList.add("is-active")
        const lang = document.querySelectorAll(".translate")
        
        lang.forEach(function(btn) {
            btn.addEventListener("click", function(e){
                readTr.style.display = "block"
                let target = ""
                if (btn.classList.contains("es")) {
                    target = "es"
                    ptBtn.style.display = "none"
                    readTr.innerText = "Quiero escuchar a Shenron!"
                } else {
                    target = "pt"
                    esBtn.style.display = "none"
                    readTr.innerText = "Quero ouvir a Shenron!"
                }

                document.querySelector("main.content").childNodes.forEach(node => {
                    if (typeof node.textContent.trim() === 'string' && node.textContent.trim().length > 0) {
                        let params = {
                            Text: node.innerText,
                            SourceLanguageCode: 'auto',
                            TargetLanguageCode: target
                        };
                        
                         
                        translate.translateText(params, function (err, data) {
                            if (err) {
                                console.log(err, err.stack);
                                alert("Error calling Amazon Translate. " + err.message);
                                return;
                            }
                            if (data) {
                                document.getElementById("tr-content").innerText = data.TranslatedText
                            } 
                        })
                    }
                })
            })    
        
        })
   })

   document.querySelector(".modal-close").addEventListener('click', function(e){
       document.getElementById("tr-content").textContent = ""
       readTr.style.display = "none"
        modal.classList.remove("is-active")
  })

  readTr.addEventListener('click', function(e){
    const pollyText = document.getElementById("tr-content").innerText
    let thisVoice = "Vitoria"
    const lang = document.querySelectorAll(".translate")

    lang.forEach(function(btn) {
        if (btn.style.display == 'block' && btn.classList.contains("es")) {
            thisVoice = "Penelope"
        } 
    })
    doSynthesize(pollyText, thisVoice)
    e.stopPropagation();

  })
    // doSynthesize AWS.Polly function from last blog
      function doSynthesize(text, voice="Joanna") {
        var pollyParams = {
            OutputFormat: "mp3", 
            SampleRate: "8000", 
            Text: text, 
            TextType: "text", 
            VoiceId: voice
        };
        polly.synthesizeSpeech(pollyParams, function(err, data) {
            if (err) {
                console.log(err, err.stack); // an error occurred
                alert("Error calling Amazon Polly. " + err.message);
            }
            else {
                var uInt8Array = new Uint8Array(data.AudioStream);
                var arrayBuffer = uInt8Array.buffer;
                var blob = new Blob([arrayBuffer]);
                var url = URL.createObjectURL(blob);
        
                audioElement = new Audio([url]);
                audioElement.play();
            }
        });
    }

```

If all goes smooth we'll have our YBZ translate text and read out loud such translation!

![img](./imgs/aws2.2.gif)