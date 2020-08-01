## Auction

This app is bootstrapped with Serverless framework.

### Technologies

- Serverless
- Node.js
- Oauth
- DynamoDB

## deploy

`sls deploy`

deploying Lambda function only
`sls deploy -f FunctionName -v`

## removing stack

`sls remove -v`

## Executing Lambda manually with logs

`sls invoke -f FunctionName -l`
