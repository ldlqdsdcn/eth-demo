# eth-demo
##安装以太坊和nodejs，开发工具 webStorm<br>

###以太坊客户端
    客户的版本：1.8.13-stable
 ###node js 
    版本：v8.10.0
 ###webStorm
    版本随意
###solidity 开发工具
http://remix.ethereum.org    
 
###创建创世文件

    puppeth 
+   Please specify a network name to administer (no spaces or hyphens, please)<br>
 >     输入 ldltest
+   What would you like to do? (default = stats)<br>
>     1. Show network stats
>     2. Configure new genesis
>     3. Track new remote server
>     4. Deploy network components
>     输入2   
  
### Which consensus engine to use? (default = clique)
    1. Ethash - proof-of-work
    2. Clique - proof-of-authority
    输入：1
###W hich accounts should be pre-funded? (advisable at least one)
    直接回车
### Specify your chain/network ID if you want an explicit one (default = random)
    随便输入（必须是字母）
### What would you like to do? (default = stats)
     1. Show network stats
     2. Manage existing genesis
     3. Track new remote server
     4. Deploy network components
     输入2
      1. Modify existing fork rules
      2. Export genesis configuration
      3. Remove genesis configuration
      输入2


### 启动以太坊客户端
    mkdir node
    geth --datadir node account new
    启动以太坊客户端
    geth --datadir node
    开始挖矿
    miner.start();
    
    
        
    

