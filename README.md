# cross-env

![](https://img.shields.io/npm/v/@w72/cross-env)
![](https://img.shields.io/node/v/@w72/cross-env)
![](https://img.shields.io/npm/l/@w72/cross-env)

## Install

```bash
npm i @w72/cross-env
```

## Usage

package.json

```json
{
  "scripts": {
    "start": "cross-env NODE_ENV=development node server.js",
    "production": "cross-env NODE_ENV=production node server.js"
  },
  "devDependencies": {
    "@w72/cross-env": "^1.0.0"
  }
}
```
