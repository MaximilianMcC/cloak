# Setup Instructions
This short guild will bring you through the process of getting Cloak to run on your computer.

## **Install needed programs**
Cloak uses *NodeJS* to run its backend, and *MongoDB* for its database. Please download, and install both of them below:
- [NodeJS](https://nodejs.org/en/download)
- [MongoDB Compass](https://www.mongodb.com/try/download/compass)

## **Set up the project**
To setup the project then either download, or clone the Git Repository to a directory of your choosing. Open the directory in a terminal *(cmd, pwsh, bash)* then enter the following command:
```sh
npm install
```
This will download the required NPM packages for the project *(Express, and MongoDB)*

## **Starting and stopping the server**
To run the server open the root directory again in a terminal and run this command:
```sh
node .\src\server.js
```
You should get output that looks like this:
```
Server listening on port 3000!
Connect via "http://localhost:3000"

```
To visit the website, go to [http://localhost:3000](http://localhost:3000), or [http://127.0.0.1:3000](http://127.0.0.1:3000). The terminal must be open to have the server running. **If you close it the website won't work**. When you are ready to stop the server, either pres `ctrl+c` *(same as copy/paste)*, or close the terminal window.