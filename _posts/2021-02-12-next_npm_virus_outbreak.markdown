---
layout: post
title:      "Preventing the Next NPM Virus Outbreak☣"
date:       2021-02-12 09:31:03 -0400
permalink:  next_npm_virus_outbreak
filename: 2021-02-12-next_npm_virus_outbreak
---

> Doing `npm install` seems like second nature these days for developers. But did you know that without proper attention and auditing of npm packages, the next time we unknowingly do `npm i` you could also be installing malicious scripts?

# Preventing the Next NPM Virus Outbreak☣

Doing `npm install` seems like second nature these days for developers. But did you know that without proper attention and auditing of npm packages, the next time we unknowingly do `npm i` you could also be installing malicious scripts?

## Is NPM Virus Free?

We know that most of the npm packages we use are maintained by third party actors. This can be a single developer, a team of developers or a super large corporation. 

NPM in itself is very reliable. But does NPM guarantee you that any package that you install will be virus free? So these days, it is not uncommon to hear [some developers](https://youtu.be/24tQRwIRP_w?t=935) foreseeing a day in which a successful virus attack will spread through millions of machines through NPM. 

Sorry if I'm the first person to tell you: **NPM it's not virus free** 🤦🏼‍♂️. 

I won't go into all technical details of how exploits are possible in NPM. Just know that NPM has [disclosed publicly](https://blog.npmjs.org/post/141702881055/package-install-scripts-vulnerability) that it is possible for a apparently 'normal' npm package (or its dependencies) to execute malicious code in your machine and cause havoc. 

For *any* package can be compromised. You probably have ESLint installed right? Well, guess what? One of its dependencies was (not long ago) compromised and installed malicious code on users machines. The ESLint team and NPM team acted quickly to solve the issue that time and their incident report can be seen [here](https://status.npmjs.org/incidents/dn7c1fgrr7ng). But this is not the last time a virus incident happened. Now the NPM security team is publishing [weekly reports](https://www.npmjs.com/advisories) of security incidents.

## Preventing Exposure To Future NPM Virus Outbreaks

Exploits can be defined as scripts that take advantage of vulnerabilities in code to cause unintended or malicious behaviors to occur. An exploit was possibly the culprit of the ESLint incident. There are some actions we can take to safeguard our code to avoid become infected with any future malicious script incidents.

NPM Security Recommendations:

1. **Think twice before installing a new NPM package**. Are you sure you really need it? Is it well maintained? Can you just code it yourself? Ask yourself this questions before adding a new dependency. The best way to safeguard yourself is simply having *less* packages. If you are part of a team you could also **consult with your team** before installing a new package. Even if you are just trying it. You might not wanna be one of those using a seemingly harmless package that is then reported to contain an exploit, as it happened in a [**recent report**](https://www.zdnet.com/article/malicious-npm-packages-caught-installing-remote-access-trojans/).
2. **Run `npm audit` periodically**. This command was released by NPM as a response to its vulnerability. By running `npm audit` you can actually scan your packages for vulnerabilities. You can even automatically fix them as well by just doing `npm audit fix`. This command might not be bullet-proof but it must be part of your coding arsenal, use it today. You can learn more about it on the [**documentation**](https://docs.npmjs.com/cli/v6/commands/npm-audit).
3. **Github Alerts**: If you use Github then just take advantage of Github through its Dependantbot alerts which comes with any repository for free. If you been ignoring those alerts, don't. Read more about it on the [**Github documentation**](https://docs.github.com/en/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies).
4. **Use third-party software**. This is useful if you are part of larger team. There are plenty of development security of tools that scan your dependencies for vulnerabilities. Some options are [**Snyk**](https://snyk.io/) and [**WhiteSource**](https://www.whitesourcesoftware.com/).
5. **Pay open source maintainers**. You heard it right. A lot of NPM packages are open source. Maintainers have to pay their bills at the end, and support them could not only help them financially but also hold them ethically accountable.
6. **Report suspicious packages to NPM**. Just like you hear in the airport. If you see anything suspicious, report it to <a href="mailto:support@npmjs.com">**support@npmjs.com**</a>.
7. **Disable NPM scripts**. You can prevent malicious scripts by opting-out of using scripts altogether by doing `npm config set ignore-scripts true`. This might be a deal breaker for some since it also disables your custom scripts on package.json. You can also do this case-by-case when installing a package such as `npm install --ignore-scripts`. There might unintended consequences of your packages not installing correctly and common commands such as npm run or npm test breaking. Some people have done workarounds by having shell aliases such as `nrun = npm run --ignore-scripts=false` or `ntest = npm test --ignore-scripts=false` to allow some particular scripts to work. I cannot assure what other problems will you encounter. Try this last strategy at your own risk. 


## Conclusion

So when is the next doomsday NPM package virus that will affect millions of computers happening? Who knows. While we might not be able to prevent the next outbreak, we as developers need to guard ourselves. 

There are certain things we can do to audit our NPM packages. By applying these NPM security recommendations to our coding arsenal we can greatly decrease the risk of getting infected when the next outbreak happens ☣. 