const searchFormBtn = document.querySelector('#searchBtn');
const value = document.querySelector('#inputForm').value;
searchFormBtn.addEventListener('click', getUser)


const URL = "https://api.github.com/users/"

async function getUser() {

    const value = document.querySelector('#inputForm').value;
    
    const res = await fetch (URL+value);
    const data = await res.json();

    console.log(data)

}   