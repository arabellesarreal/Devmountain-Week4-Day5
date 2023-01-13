const fortunes = require('./db.json')
let globalId = 7

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortunes: (req, res) => res.status(200).send(fortunes),

    getFortune: (req, res) => {
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex].fortune;

        res.status(200).send(randomFortune);
    },
    
    createFortune: (req,res) => {
    let { fortune, type} = req.body
    let newFortune = {
        id: globalId,
        fortune,
        type
        }
    fortunes.push(newFortune)
    console.log(newFortune)
    res.status(200).send(fortunes)
    globalId++
    },

    deleteFortune: (req, res) => {
        let index = fortunes.findIndex(elem => elem.id === +req.params.id)
        fortunes.splice(index, 1)
        res.status(200).send(fortunes)
    },

    updateFortune: (req, res) => {
        let index = fortunes.findIndex(elem => +elem.id === +req.params.id)
        //fortunes[index].fortune = "Changing Fortune"
        req.status(200).send(fortunes)


    }
}