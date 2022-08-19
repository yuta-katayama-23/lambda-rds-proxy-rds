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

## Execute

- 以下のコマンドを実行

```
aws lambda invoke --function-name rds-proxy-lambda-func response.json
```

## Qiita の記事

[Lambda - RDS Proxy(TLS あり) - Aurora の構成で RDS に接続する](https://qiita.com/yuta-katayama-23/items/c543d957694ea37988ab)
