module.exports = {
  profile: "myCredProfile",
  region: 'ap-northeast-1',
  handler: 'index.handler',
  role: "arn:aws:iam::306006842612:role/myTestLambda",
  functionName: "myTest",
  timeout: 5,
  memorySize: 256,
  runtime: 'nodejs4.3'
}
