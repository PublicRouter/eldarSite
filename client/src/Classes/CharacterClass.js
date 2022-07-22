
//Official xrpl API connecting to xrplcluster node
//https://xrpl.org/http-websocket-apis.html

const { XrplClient } = require("xrpl-client");
const client = new XrplClient("wss://xrplcluster.com");
const characterList = []

class Character {
    constructor(walletAddress, userName) {
        this.walletAddress = walletAddress;
        this.userName = userName;
        this.validatedUser = false;
        this.friendsList = [];
        this.nftList = [];
        this.tokenPool = 0;
        this.hasNode = false;
    }
    
    sendTokens() {
        //send another character xrp
    }

    startAccountTxListener() {
        //if any tx sent or received by wallet address, pop up occurs 
    }

    openTrade() {
        //opens trade UI, both players can offer either xrp/items, both players must confirm trade before finalized
    }
   
    getWalletBalance() {
         //get characters walletAddress balance from xrpl, set  "this.tokenPool" to current balance
         console.log(this.tokenPool)
    }

    hasNodeSwitch() {
        //if user operates a node, set "hasNode" flag to true, else leave false
    }
    async checkAccountObjects() {
        const objCheck = await client.send({
            "command": "account_objects",
            "account": this.walletAddress,
            // "strict": true,
            "ledger_index": "validated",
            "type": "state",
            "deletion_blockers_only": false,
            "limit": 10
        }).then(reply => {
            console.log("my ledger account object: ", reply) //SECOND
            console.log("te token pool: ", this.tokenPool)
        })
        //returns undefined
        console.log("yooo:", objCheck) //THIRD Undefined
    }
    //need to filter for nft with 'Issuer' set to our mint address
    //return object also contains field for nft URI
    //return matching nfts to characters nftList field
    async checkWalletNfts () {
        const nftCheck = await client.send({
            "command": "account_nfts",
            "account": this.walletAddress,
            "ledger_index": "validated"
        }).then(reply => {
            console.log("Account nft response: ", reply)
        })

    }
    //lookup account info and update account tokenPool with wallet balance
    async updateTokenPoolWithWalletBalance() {  

        const accountInfo = await client.send({ 
            command: "account_info",
            account: this.walletAddress
        }).then(reply => {
            console.log("my wallet account info: ", reply) //FIRST
            this.tokenPool = reply.account_data.Balance
        })
        // console.log("my account info: ", );

        //get ledger node info
        client.on("ledger", (ledger) => {
            console.log("Ledger", ledger);
        });

           
        // })
        
    }
}

const james = new Character("rKvE3ZUV4e975D5MfzTN4nYLeLgTu1HHF6", "James")
const jeff = new Character("r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1", "Jeff")
characterList.push(james, jeff)
console.log(...characterList)
console.log(characterList[0].userName == "James"? console.log("Names Match!") : console.log("Dont match!"))
// async function initChar() {
//     // await james.updateTokenPoolWithWalletBalance()
//     // await james.checkAccountObjects()
//     await james.checkWalletNfts()
    
// }

// initChar()
// module.exports = Character;