# tornado_team2
環境手順
## フロント
1.ビルドする（imageの構築）
$ docker-compose build 

2.コンテナの構築・起動
$ docker-comopse up　-d 


3.コンテナを止めるときは$ docker-compose stop で止めるのがよい

4.再度立ち上げるときは$ docker-compose start 

5.localhost:8000で接続できる

### packageのインストール(方法２つ)
1. docker-compose 側からインストールする
　$ docker-compose run --rm front yarn add ~~~~~~~
2. dockerのコンテナ側からyarn add する(docker desktopからだと超簡単にできる) </br>
　$ docker exec -it コンテナID /bin/bash</br>
   　$ yarn add ~~~~~~
### error対応
1. build時にエラーが出た場合はcacheをなくして再度buildしなおす
$ docker-compose build --no-cache

2.個別にコンテを立てる場合は --rm を名前の後ろにつける(api / front / db)
例）$ docker-compose run --rm front  


### tailwind
読み込まれない人のため(windows10だと恐らく必須)：https://qiita.com/P-man_Brown/items/bf05437afecde268ec15




## バックエンド
