const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const form = document.querySelector('form')
const fortuneContainer = document.querySelector('#fortune-container')

const fortCallback = ({ data: fortunes }) => displayFortList(fortunes)
const getAllForts = () => axios.get("http://localhost:4000/api/fortune").then(fortCallback)


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const createFortune = body => {
    axios.post(`http://localhost:4000/api/fortune/`,body).then(fortCallback)
}

const deleteFortune = id => {
    axios.delete(`http://localhost:4000/api/fortune/${id}`).then(fortCallback)
}

const updateFortune = id => {
    axios.put(`http://localhost:4000/api/fortune/${id}`).then(fortCallback)
}

function submitHandler(e){
    e.preventDefault()

    let fortune = document.querySelector('#fortune')

    let bodyObj = {
        fortune: fortune.value,
    }

    createFortune(bodyObj)

    fortune.value = ''
}

function listFortune(fortune){
    const fortBullet = document.createElement('div')
    fortBullet.innerHTML = 
    `<div style = "display: flex;">
      <p>${fortune.fortune}</p>
      <button id = updateBtn onclick="updateFortune(${fortune.id})">Update</button>
    </div>`
    fortuneContainer.appendChild(fortBullet)
}

function displayFortList(arr){
    fortuneContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        listFortune(arr[i])
    }
}

form.addEventListener('submit', submitHandler)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
deleteBtn.addEventListener('click', deleteFortune)

getAllForts()
