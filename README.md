# tornado_team2
環境手順

1.ビルドする（imageの構築）
docker-compose build 

2.コンテナの構築・起動
docker-comopse up　-d 


3.コンテナを止めるときはdocker-compose stop で止めるのがよい

4.再度立ち上げるときは2番

    Name                   Command               State    Ports
---------------------------------------------------------------
team2_api_1     rails server -b 0.0.0.0          Exit 0        
team2_db_1      docker-entrypoint.sh --cha ...   Exit 0        
team2_front_1   docker-entrypoint.sh yarn dev    Exit 1   


1.build時にエラーが出た場合はcacheをなくして再度buildしなおす
docker-compose build --no-cache

2.個別にコンテを立てる場合は --rm を名前の後ろにつける(api / front / db)
例）docker-compose run --rm front  