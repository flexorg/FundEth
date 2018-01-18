# <a href='fundeth.me'><img src='https://s3-us-west-1.amazonaws.com/loudfog/fundeth_placeholder.png' height='100'/></a>   FundEth
FundEth is a web app that aims to have a completely anonymous and
transparent crowdfunding process, all built on the Ethereum block
chain network.

## Background and Overview

By leveraging the Ethereum network, we can avoid a centralized backend such as PostgreSQL and instead use a decentralized backend.  The benefits of this include:

* Security
  + The block chain structure inherently provides security as any attacks on a node leaves the other nodes in the network unchanged.  
  + Any attempted changes to a transaction would require changes to the entire block chain.

* Transparency
  + All transactions are publicly accessible to anybody that chooses to view the block chain.
  + Adds an extra layer of accountability to users who accept donations.

* Anonymity
  + No user data will be stored in a central location and keep all users identifiable only by their public key.

* Frictionless Payments
  + Low fees
  + Easy cross-border payments

At the time of writing, Solidity is a relatively new language and as such, is always changing week by week.  Hopefully, this project will assist those also looking to delve into Solidity as well as block chain development

## Technologies and Technical Challenges

This web app will utilize the following technologies:
Solidity, JavaScript, Web3, React-Redux, Truffle, Geth, HTML5, CSS3, and Material Design

**The primary technical challenges**

* Learning Solidity and block chain principles (gas)
* Integrating the application using Web3 and MetaMask
* Being able to store and retrieve data on the Ethereum block chain

## Smart Contracts

At a high level, smart contracts are the self executing code that will be written in Solidity and hosted on the Ethereum network once live.  It will consist of the logic for generating projects and for distributing payments.  

Smart contracts are written in .sol files which must be compiled and migrated, similar to migrating any backend changes in Rails. A common error that was encountered not only by us but by many others as well was the __BigNumber__ error.  After many days of struggling through documentation and just overall workarounds, we discovered that __removing the compiled files and having truffle compile everything from scratch again__ solved the error.

## Testing

As the Ethereum block chain grows, the time needed to get a response also grows.  Thus, we needed to utilize testing suites to efficiently validate our code and our smart contracts.  The started with the Truffle testing suite.  A look at the repo showed many deprecations and an overall decline in updates.  However, block chain technology is still very new so we continued on with using Truffle.  We received many unexpected results with __asynchronicity__, especially when trying to integrate the Redux cycle.  Furthermore there was a created getweb3 API that we realized was needed to incorporate web3 methods with our projectUtil APIs.  We solved most of these issues with Promises and ES8 async/await.  
