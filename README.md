# node-red-practice

This is a practice project for Node-RED.

## Installation

```bash
npm install
```

## Usage

### 1. Run as embedded Node-RED server

```bash
npm run embed
```

https://nodered.org/docs/user-guide/runtime/embedding

Run as embedded Node-RED server. Listen on port 1988([Reply 1988](https://en.wikipedia.org/wiki/Reply_1988)).

> Note: this is not a good practice. It is better to run as standalone Node-RED server. It can not install ui-dashboard. UI dashboard is not available in embedded mode. Because `ui` url not included in express app.

### 2. Run as standalone Node-RED server

machine0 is the machine that runs Node-RED. Start with environment variable `PORT` set to 1980 in `environment` file.

It also use flow-manager to manage flows.

```bash
npm start
```

```bash
npm run first1
```

first1：（http://127.0.0.1:1888/） with sub project : https://github.com/zhangmx/node-red-practice-project

include uibuilder\ node-red-contrib-simple-webdriver \ node-red-contrib-flow-asserter

machine1：(http://127.0.0.1:1881/) is the machine that runs Node-RED. Start with outside settings file `settings1.js` under `src` directory.

machine1：(http://127.0.0.1:1882/) is the machine that runs Node-RED. Start with outside settings file `settings2.js` under `src` directory.

```bash
npm run machine1
npm run machine2
```

machine3：(http://127.0.0.1:1883/) is the machine that runs Node-RED.  in `machine3/settings.js` file. Try nrlint.

```bash
npm run machine3
```

## Flows

### 1. Version No. in package.json

Get version number from package.json and retrun it to debug node.

Manual update version number in package.json.

### 2. tcp demo

A simple tcp server and client.

### 3. table demo

7 examples of table(`node-red-node-ui-table`) node.

1 example about select one row after Table init.

## Some tips

### npm install git subfolder

https://github.com/zhangmx/node-red-ui-nodes node-red-node-ui-table

```bash

npm install https://gitpkg.now.sh/zhangmx/node-red-ui-nodes/node-red-node-ui-table?master

```
