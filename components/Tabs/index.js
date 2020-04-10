// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function newtabs(info) {
    const newtab = document.createElement('div');
        
    newtab.textContent = info;
    
    newtab.classList.add('tab');
    

    return newtab;
}
   
  const entryPoint3 = document.querySelector('.topics');
  
  axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
  console.log(response.data)
  const newA = response.data.topics;

  newA.forEach(item => {
    entryPoint3.appendChild(newtabs(item))
  });
});
  