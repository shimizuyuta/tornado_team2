# tornado_team2
環境手順
## フロント
1.ビルドする（imageの構築）
$ docker-compose build 

2.コンテナの構築・起動
$ docker-comopse up　-d 


3.コンテナを止めるときは$ docker-compose stop で止めるのがよい

4.再度立ち上げるときは$ docker-compose start 

    Name                   Command               State    Ports
---------------------------------------------------------------
team2_api_1     rails server -b 0.0.0.0          Exit 0        
team2_db_1      docker-entrypoint.sh --cha ...   Exit 0        
team2_front_1   docker-entrypoint.sh yarn dev    Exit 1   

### packageのインストール(方法２つ)
1. docker-compose 側からインストールする
　$ docker-compose run --rm front yarn add ~~~~~~~
2. dockerのコンテナ側からyarn add する(docker desktopからだと超簡単にできる)
　$ docker exec -it コンテナID /bin/bash 
  $ yarn add ~~~~~~
### error対応
1. build時にエラーが出た場合はcacheをなくして再度buildしなおす
$ docker-compose build --no-cache

2.個別にコンテを立てる場合は --rm を名前の後ろにつける(api / front / db)
例）$ docker-compose run --rm front  

## バックエンド
