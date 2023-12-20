const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // Initialize a variable to count the number of books read
  let count = 0;

  // Iterate through the library array
  for (let i = 0; i < library.length; i++) {
    // Check if the readingStatus is true (book has been read)
    if (library[i].readingStatus === true) {
      count++;
    }
  }

  // Return the count of books read
  return count;
};

// Use console.log to display the result in the console
console.log(numberOfBooksRead());
