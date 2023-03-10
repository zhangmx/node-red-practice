# node-red-practice

This is a practice project for Node-RED.

## Installation

```bash
npm install
```

## Usage


### 1. Run as embedded Node-RED server

https://nodered.org/docs/user-guide/runtime/embedding

Run as embedded Node-RED server. Listen on port 1988([Reply 1988](https://en.wikipedia.org/wiki/Reply_1988)).

```bash
npm start
```

> Note: this is not a good practice. It is better to run as standalone Node-RED server. It can not install ui-dashboard. UI dashboard is not available in embedded mode. Because `ui` url not included in express app.

### 2. Run as standalone Node-RED server

machine0 is the machine that runs Node-RED. Start with environment variable `PORT` set to 1980 in `environment` file.

It also use flow-manager to manage flows.

```bash
npm run machine0
```

machine1(2) is the machine that runs Node-RED. Start with outside settings file `settings1(2).js` under `src` directory.

machine1 use port 1881, machine2 use port 1882.

```bash
npm run machine1
npm run machine2
```
