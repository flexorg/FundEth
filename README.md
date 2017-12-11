# FundEth

FundEth is a web app that aims to have a completely anonymous and
transparent crowdfunding process, all built on the Ethereum block
chain network.

## Background and Overview

By leveraging the Ethereum network, we can create a decentralized
back end rather than a traditional backend that uses a centralized back end such as PostgreSQL.  The benefits of this include:

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

## Smart Contracts

At a high level, smart contracts are the self executing code that will be written in Solidity and hosted on the Ethereum network once live.  It will consist of the logic for generating projects and for distributing payments.  

A project will essentially be creating a contract wallet with which users can donate to and the project owner can take from.  

## MVP

- [ ] Users will be able to generate projects
- [ ] Users will be able to view projects (index and show)
- [ ] Users will be able to donate to a project with Ethereum
- [ ] The projects will monitor their own transaction history
- [ ] Users will be able to see transaction history and total amount donated

## Wireframes

### Splash Page

### Projects Index

### Project Show

### Project Form


## Technologies and Technical Challenges

This web app will utilize the following technologies:
Solidity, JavaScript, Web3, React-Redux, Truffle, Geth, HTML5, CSS3, and Material Design

**The primary technical challenges**

* Learning Solidity and block chain principles (gas)
* Integrating the application using Web3 and MetaMask
* Being able to store and retrieve data on the Ethereum block chain

## Things we accomplished this weekend

1. Both Jeff and Jon completed their introduction to Solidity and have a private block chain running for development and testing purposes

2. Bo created a React skeleton that integrates Truffle and Web3

3. All members researched the basic structures of block chain technology as well as become familiar with Truffle and Web3

4. Started a skeleton for our project

## Group Members & Work Breakdown

Our group consists of three members, Jonathan Ray, Jeffery Ren, and Bo Pang.

Jon and Jeff's primary responsibilities will be:
- writing the smart contract in Solidity
- testing the local development environment
- integrating front end components with smart contracts via Web3
- Deploying the smart contract onto the Ethereum block chain

Bo's primary responsibilities will be:
- creating React components for the front end
- integrating Truffle and Web3 with React-Redux
- solve routing limitations put in place by Truffle
- UI/UX with HTML5 and CSS3

## Implementation Timeline

**Day 1:** Finish smart contract generation as well as making a form page for project creation

**Day 2:** Integrate the form with smart contracts.  Create a show/index page for projects

**Day 3:** Populate the projects with information and integrate them with the project show and index pages.  Style pages for easy navigation.

**Day 4:** Create a styled splash page with gifs and videos as well as including instructions for usage and/or installation.  Close up any loose ends

**Day 5:** Create a production README and final styling touches

## Bonus features

- [ ] Implement smart contracts that self terminate given a deadline
- [ ] Potentially incorporate other cryptocurrencies for funding
