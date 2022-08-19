# tornado_team2

## Dockerの立ち上げ
1. ビルドする（imageの構築）
```
$ docker-compose build 
```

2. コンテナの構築・起動
```
$ docker-compose up -d 
```

3. コンテナの停止
```
$ docker-compose stop 
```

4. 再度立ち上げるときは
```
$ docker-compose start 
```

5. [http://localhost:8000](http://localhost:80000)で接続できる

### error対応
1. build時にエラーが出た場合はcacheをなくして再度buildしなおす
```
$ docker-compose build --no-cache
```

## Node.jsのpackageインストール
- docker-compose 側からインストールする
   ```
   $ docker-compose run --rm front yarn add package-name
   ```
- dockerのコンテナ側からyarn add する(docker desktopからだと超簡単にできる)
   1. コンテナに入る
   ```
   $ docker exec -it container-ID /bin/bash
   ```
   2. yarn addする
   ```
   $ yarn add package-name
   ```


2. 個別にコンテを立てる場合は --rm を名前の後ろにつける(api / front / db)
例）
```
$ docker-compose run --rm front  
```