## Build

- 以下のコマンドを順に実行

```console
yarn build
rm -rf node_modules
yarn install --production
zip lambda.zip -r .
```

## Deploy

- 以下のコマンドを順に実行

```console
export AWS_PROFILE=yuta_katayama_23
aws lambda update-function-code --function-name rds-proxy-lambda-func --zip-file fileb://./lambda.zip
```
