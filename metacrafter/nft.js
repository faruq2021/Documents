// Declare an empty array to hold the NFTs
let nfts = [];

// Define the mintNFT function that takes in the metadata values as parameters
function mintNFT(name, description, imageUrl) {
  // Create an NFT object with the provided metadata
  let nft = {
    name: name,
    description: description,
    imageUrl: imageUrl
  };

  // Store the NFT in the variable for holding NFTs by pushing it to the 'nfts' array
  nfts.push(nft);
}

// Define the listNFTs function to print the metadata of all NFTs
function listNFTs() {
  // Iterate over the 'nfts' array
  for (let i = 0; i < nfts.length; i++) {
    // Print the name, description, and image URL of each NFT to the console
    console.log("Name: " + nfts[i].name);
    console.log("Description: " + nfts[i].description);
    console.log("Image URL: " + nfts[i].imageUrl);
    console.log("-----------------------");
  }
}

// Define the getTotalSupply function to return the total number of NFTs created
function getTotalSupply() {
  // Return the length of the 'nfts' array, representing the total number of NFTs
  return nfts.length;
}

// Call the functions to demonstrate their functionality
mintNFT("NFT 1", "Description 1", "image1.jpg");
mintNFT("NFT 2", "Description 2", "image2.jpg");
mintNFT("NFT 3", "Description 3", "image2.jpg");
listNFTs();
console.log("Total NFTs: " + getTotalSupply());
