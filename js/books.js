

const searchBook = () => {
    const searchFeild = document.getElementById('book-search');
    const searchText = searchFeild.value;
    searchFeild.value = '';
    

    const url = `http://openlibrary.org/search.json?q= ${searchText}`;
    fetch (url)
    .then (res => res.json())
    .then (data => displaySearchResult(data.docs))
}

 
const displaySearchResult = docs => {

  // show search result no.
  const searchNumber = document.getElementById('search-number');
  const div2 = document.createElement ('div2');
  div2.classList.add('col');
  div2.innerHTML = `
  <h5 class="text-center"> Search Result: ${docs.length}</h5>
  `;
  searchNumber.textContent = '';
  searchNumber.appendChild(div2);
  
  
  
  
  const searchResult = document.getElementById('search-result');
  searchResult.textContent = '';
    docs.forEach (doc => {
        console.log(doc);

        // show search result
        const div = document.createElement ('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card mt-5">
          <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top img-thumbnail" alt="Book Image">
            <div class="card-body">
              <h5 class="card-title">Book Name: ${doc.title}</h5>
              <h5 class="card-title">Author: ${doc.author_name}</h5>
              <p class="card-title">First Publish: ${doc.first_publish_year}</p>
              <p class="card-title">First Publisher: ${doc.publisher[0]}</p>
            </div>
        </div>
        `;
        
        searchResult.appendChild(div);
        
    })
}