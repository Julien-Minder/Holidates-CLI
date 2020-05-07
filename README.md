# Holidates-CLI

Learning project with Node.js technology

# Node.JS: CLI

> Our first tool, with Node.JS

- Type of challenge: **learning**
- Repository : **`\***-CLI`\*\* (name as you want with CLI)
- Deadline : **08/05/2020 5:00 pm**
- Team : **solo**
- Submission : When the tool is published on npm, simply send us **the page of your npm package**.

## About Node.JS

You may already know it: **javascript** is a programmation language executed in a _web browser_, which has an _engine_ to run this language.  
**Node.JS** (or just "_node_", if you want to be _the cool guy in the room_) is a _runtime_ to execute javascript _outside_ of a browser: it includes an engine (_v8_, the javascript engine of webkit/chrome) to run the langage, some librairies to interact with the system (manipulating files, executing sub-programs, etc…), and use a _module_ structure, which depends on [**npm**](https://www.npmjs.com), a registry with more than one million packages (as for november 2019), created and maintained by the community.

### _Nearly_ everywhere?

Altough **Node.JS** is mainly used for _back-end_ (where it competes with PHP, Java or Ruby), node allows us to write programs for command line, mobile apps (with [ReactNative](https://facebook.github.io/react-native/), for instance), desktop apps (with [Electron](https://electronjs.org/), used to built apps like the [Atom editor](https://atom.io), and [many more](https://electronjs.org/apps)), robotics (with tools like [Johnny-Five](http://johnny-five.io/)) or even IOT (with optimized runtimes like [Node-RED](https://nodered.org/)).

## Our first Node.JS program

To discover _node_, we will start by coding a small command-line tool.

It will be simple, allowing you to discover node, npm and their module architecture.

Just this once, I will _kinda_ guide you through the process.

> ☝️ **NOTE:** we will not need Docker for the first (and fast) project - we will work locally

### 1. Install Node.JS & npm

You should already have node installed on your machine, since we used it for javascript exercises series at the beginning of our BeCode adventures.  
But if you need to, simply go to [the official Node.JS website](https://nodejs.org/en/) and follow the instructions (for Ubuntu/Debian, the [instructions are here](https://github.com/nodesource/distributions/blob/master/README.md)).

> 👉 Install at least version `12.x.y` (version `10` is fine too, but, hey, it's 2020!)

### 2. Create the project workspace

Create a github repository for the project, and use the command `npm init` to initialize the project.

> ☝️ **NOTE:** for the question about the _entry point_, let the default answer, "index.js"

### 3. Your first script

Create a `index.js` file at the root of the repository, and add the following line to it:

```javascript
console.log("Hello, Node.JS!");
```

Then, enter the following command in the terminal:

    $ node .

[Congrats!](https://pics.awwmemes.com/people-write-congrats-because-they-cant-spell-congrajlashins-38832971.png) You've created your first Node.JS script!

### 4. Going further…

Now, I will let you experiment and dig further, with a complete statement.

You will code a command line tool that will take a _country name_ as _parameter_, like this:

    $ myNodeCLITool Belgium

The tool will verify that the parameter is a _well-formatted_ country name, transform it onto a _two-letters country code_, then perform an HTTP request to the API of the [**nager.date**](https://date.nager.at/) service, like [explained here](https://date.nager.at/Api).  
You will show the results (a list of holidays dates **for the current year**) in a _readable_ way in the terminal.

> 👉 **NOTE:** when I say "_for the current year_", it means "_retrieve the current year_", not hardcoding `2020` somewhere in the code. 😅

> ⚠️ **WARNING:** your script will be executed in a specific context. For these kind of command line tools, it's recommanded to add the following line at the top of your _entry point_ (here, your `index.js` file):

    #!/usr/bin/env node

> 🤓 This line, at the top of an executable file, is called the [**shebang**](<https://en.wikipedia.org/wiki/Shebang_(Unix)>)

As result, you will have a tool to get the holidays of the current year for the given country. Always useful.

#### `npm` packages to use

There's _a lot_ of packages on [npm](https://www.npmjs.com), including some doing _exactly_ what I ask you to do.  
That's not the point, obviously.

But to save you some trouble losing yourselves in this big pile of possibilities, I recommand you to use the following packages:

- [`country-list`](https://www.npmjs.com/package/country-list), to convert the country name onto a country code
- [`axios`](https://www.npmjs.com/package/axios), to perform HTTP requests

##### even further…

For those of you wanting to make your tool _pretty_ (and add more challenge), you can dig around the following packages:

- [`ora`](https://www.npmjs.com/package/ora), to show a _spinner_ (loading animation) while your request is pending
- [`chalk`](https://www.npmjs.com/package/chalk), to add some colors in your terminal
- [`figlet`](https://www.npmjs.com/package/figlet), add some _style_ to your terminal

You can also handle a _second parameter_, asking the year to show the corresponding holidays (if the parameter is missing, stick to the default behavior of looking for the current year).

### 5. Testing your tool / Prepare for publication

You've been able to test your program all along the development process, but in a perfect world, it will be cool to give it a name, like `holidates`, to be able to execute it like this in a terminal:

    $ holidates Belgium

To do so, you'll need to document about the [`bin` property](https://docs.npmjs.com/files/package.json#bin) of the `package.json` file.  
You can also use the [`npm link`](https://docs.npmjs.com/cli/link) command to test your program locally before publishing it.

### 6. Publish on npm

Publishing on npm is free, but you need to [create an account](https://www.npmjs.com/signup).

Then, before publishing your package, there's three important steps to follow:

#### 6.1. Choose a name for your package

You're free to name your package freely.  
But with _more than 1 million packages_ on the npm registry, there's change the name you choose is already in use.  
_Don't cry!_ We can _scope_ your package with your npm account's name. In your `package.json` file, prefix the `name` property with `@yournpmlogin/`, like this:

```json
{
  "name": "@leny/holidates"
}
```

You will then be able to publish your package without problem, even if the name is already in use.

#### 6.2. Complete your README.md file

The content of your `README.md` file will be displayed as the presentation of your package on npm. Explain how your package work, how to install and use it. Get inspiration from other well-known packages.

> 🇬🇧 **IMPORTANT:** write your README in **english**!

#### 6.3. Update the version number

The first version of your package can be `1.0.0`, `0.1.0` or `0.0.1`, it's up to you.

But keep in mind that when you will update your package and publish a new version, you'll need to follow the rules of [semantic versionning (_aka_ semver)](https://semver.org).

##### Publish

Finally, to publish on npm, simply use the following command:

    $ npm publish --access public

---

Good luck!
