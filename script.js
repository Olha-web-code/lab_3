function getShippingMessage (country,price,deliveryFee){

    const totalPrice = price + deliveryFee;

    return `Shipping to ${country} will cost
    ${totalPrice} credits`;
}

console.log(getShippingMessage("Italy", 30, 5));


function makeTransaction(quantity, pricePerDroid, customerCredits){
    const totalPrice = pricePerDroid * quantity;
    if (totalPrice > customerCredits) {
        return 'Insufficient funds!'
    } else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`
    }
}

console.log(makeTransaction(5,1000,10000));

console.log(makeTransaction(3,1000,1000));

function makeArray(firstArray, secondArray, maxLength){
    const newArray = firstArray.concat(secondArray);
    if (newArray.length>maxLength) {
        return newArray.slice(0, maxLength);
    } else {
        return newArray;
    }
}

console.log(makeArray(["apple", "banana"], ["orange", "kiwi"], 4));

console.log(makeArray(["apple", "banana"], ["orange", "kiwi"], 2));



// Task 1: Create a one-dimensional array and perform operations

// Function to create the array based on user input and perform operations
function performOperations() {
    let length = parseInt(prompt("Enter the length of the array:"));
    let arr = [];
    
    // Populate the array with random numbers (for the sake of example)
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 100)); // Random number between 0 and 99
    }
    
    console.log("Original Array:", arr);
  
    // Sum of elements at even indices
    const sumEvenIndices = arr.filter((_, index) => index % 2 === 0).reduce((sum, value) => sum + value, 0);
    
    // Find max element and its index
    let maxElement = Math.max(...arr);
    let maxIndex = arr.indexOf(maxElement);
    
    // Find min element and its index among elements with odd indices
    let oddIndexedElements = arr.filter((_, index) => index % 2 !== 0);
    let minOddIndexedElement = Math.min(...oddIndexedElements);
    let minOddIndexedIndex = arr.indexOf(minOddIndexedElement);
    
    console.log("Sum of elements with even indices:", sumEvenIndices);
    console.log("Max element:", maxElement, "at index", maxIndex);
    console.log("Min element with odd indices:", minOddIndexedElement, "at index", minOddIndexedIndex);
  }
  
  // Task 2: Sort the array and print original and sorted arrays
  
  // Function to sort the array
  function sortArray() {
    let arr = [45, 12, 78, 34, 89, 23, 56]; // Example array
    
    // Print original array
    console.log("Original Array:", arr);
  
    // Sort the array in ascending order
    let sortedArr = [...arr].sort((a, b) => a - b); // Non-destructive sort
    
    // Print sorted array
    console.log("Sorted Array:", sortedArr);
  }
  
  // Run the functions
  performOperations(); // Call the function for Task 1
  sortArray(); // Call the function for Task 2
  