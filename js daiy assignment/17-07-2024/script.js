// Using Fetch API:
function fetchData() {
    fetch('https://fakestoreapi.com/products/')
     .then(response => response.json())
    .then(data => console.log(data))
    }
fetchData();

// Handling promises with async and await:
async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products/")
    const data = await response.json();
    console.log(data);
    }
fetchData()

// Fetch with Parameters and create a table:
document.addEventListener("DOMContentLoaded", () => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/"
        );
  
        if (!response.ok) {
          throw new Error("HTTP error");
        }
        const data = await response.json();
  
        populateData(data);
      } catch (error) {
        console.error("Error", error);
      }
  
      function populateData(data) {
        const tableBody = document.querySelector(".table-data tbody");
  
        data.forEach((post) => {
          const row = document.createElement("tr");
  
          const idCell = document.createElement("td");
          idCell.textContent = post.id;
          row.appendChild(idCell);
  
          const titleCell= document.createElement("td");
          titleCell.textContent = post.title;
          row.appendChild(titleCell);
  
          const completedCell = document.createElement("td");
          completedCell.textContent = post.completed;
          row.appendChild(completedCell);
  
          tableBody.appendChild(row);
        });
      }
    }
    fetchData();
  });

  // Error Handling in Asynchronous Code:

function fetchData() {
  fetch("https://jsonplaceholder.typicod.com/todos/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

fetchData();
// Combining Fetch with Async/Await and Error Handling
async function fetchPosts() {
   try {
    const response = await fetch('(link unavailable)');
    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
  }
}

fetchPosts();


// reflection questions:

//1. What did you learn about the Fetch API and handling asynchronous operations in JavaScript?

// The Fetch API allows for handling asynchronous operations in a more concise and readable way.
//  By using fetch, we can retrieve data from a URL, and then use async/await or 
// .then() to handle the promise returned by fetch.

// 2.How does using async and await simplify working with Promises?

     //  We can use await to pause the execution of the code until a promise is resolved or rejected,
   //  making the code easier to read and maintain. This eliminates the need for nesting callbacks or 
   //  chaining .then() methods, making the code more concise and easier to understand.

  // 3.What are the advantages of incorporating error handling in asynchronous functions?
  // The advantages incorporating error handling in asynchronous functions is essential 
  // for writing more reliable, and maintainable code.













