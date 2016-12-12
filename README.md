# Deploy a lambda function with zip

1) `npm install`

2) Modify lambda-config.js for your own lambda function.

3) `gulp deploy` will upload file to lambda. It will check function name. If it doesn't exist, it will create a new one.

4) `gulp clean` will delete redundant file made by deploy.


