/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Step 1: Create a variable to hold your NFTs
let nftCollection = [];

// Step 2: Define the mintNFT function
function mintNFT(name, eyeColor, shirtType, bling) {
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    nftCollection.push(nft);
}

// Step 3: Define the listNFTs function
function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log(`NFT ${i + 1}:`);
        console.log(`Name: ${nftCollection[i].name}`);
        console.log(`Eye Color: ${nftCollection[i].eyeColor}`);
        console.log(`Shirt Type: ${nftCollection[i].shirtType}`);
        console.log(`Bling: ${nftCollection[i].bling}`);
        console.log('--------------------');
    }
}

// Step 4: Define the getTotalSupply function
function getTotalSupply() {
    return nftCollection.length;
}

// Step 5: Call the functions to test
mintNFT('Cool Cat', 'Blue', 'Hoodie', 'Gold Chain');
mintNFT('CryptoPunk', 'Green', 'Leather Jacket', 'Diamond Ring');
mintNFT('Bored Ape', 'Brown', 'T-Shirt', 'Silver Necklace');

// Print the details of all NFTs
listNFTs();

// Print the total number of NFTs
console.log(`Total Supply: ${getTotalSupply()}`);
