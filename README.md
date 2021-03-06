# Vente
![alt tag](https://travis-ci.org/MinimalNoise/vente.svg?branch=master)

## What is it?

*Vente* is a free and Open Source Desktop (potentially more) app to monitor your sales activity.

*Vente* is currently going under heavy development.

## What's coming?

The features that are planned to be shipped in the beta of the first version (1.0.0) are:

1. ~~i18n: support of English and French in the UIs~~
2. ~~Add/Update Lead~~
3. ~~Transform Lead to Client~~
4. Update Client
5. View [Clients|Leads|Revenue temporal per [Client|Salesman]]
6. View top N Salesmen
7. View top N Clients
8. Create a Sales Manager account
9. Create a Salesman account
10. Update a Salesman's commission
11. Update tracker (who did what and when?)
12. Implement the Roles System

## Want to get involved?

If you are a business, interested in the app and operating in Western Europe, please contact [me](https://github.com/MayasHaddad). I will be glad to have your feedback (maybe support to meet your spcific requirements).

If you are a dev operating on Planet Earth and want to contribute, feel free to [pull request](https://github.com/MinimalNoise/vente/pulls) after reading [this](https://github.com/MinimalNoise/vente#technical-documentation).

## How to run vente
```
npm install -g python electron-prebuilt webpack
```
Then go to vente directory :
```
npm install
webpack --config webpack.conf.js
```
You can load app using
```
electron .
```
## Business Documentation
### Roles System

||Admin|Sales manager|Salesman
|---|:---:|:---:|:---:
|Access update tracker (who did what and when?)|x|||
|Create a Sales Manager account|x|||
|Create a Salesman account|x|||
|Update a Salesman's commission||x||
|View top N Salesmen ||x||
|View [Clients\|Leads\|Revenue temporal per [Client\|Salesman]]||x||
|View [Clients\|Leads\|Revenue temporal per Client]||x|x|
|View top N Clients||x|x|
|Add/Update Lead||x|x|
|Transform Lead to Client||x|x|
|Update Client||x|x|

## Technical Documentation
### Technical Architecture
Vente is composed of:
* a frontend part (Desktop, Mobile, Web apps) implemented in web technologies
* a set of standalone business services representing the backend of the solution and collaborating through JSON REST HTTP APIs

### Underlying Technologies
* The Desktop app is build with [Electron](http://electron.atom.io/)
* The UI is built with [React](https://facebook.github.io/react/)/[Flux](https://facebook.github.io/flux/) architecture
* Services are written in Javascript and run into [Node.js](https://nodejs.org/) (given that each service is standalone, it can be implemented using different technologies)
* Data is persisted in [Mongodb](https://www.mongodb.org/)/[MySql](https://www.mysql.com/) servers
