const express = require('express');
const axios = require('axios')
const router = express.Router();

const endpoint = "http://www.fuzzwork.co.uk/api/typeid2.php?"
const evepraisal = "https://evepraisal.com/appraisal/structured.json?persist=no"

router.post('/', (req, res, next) => {
    //console.log("Got body: ", req.body);
    const json = req.body;
    //getTypeidList(json).then(res => console.log(res))
    getAppraisal(json).then((response) => {
        var buyprices = []
        const appraisal = response.appraisal

        // TODO: retrieve db price modifiers
        const globalmod = 0.95 // GLOBAL MOD - REMOVE 

        // cycle through json and get buy prices
        for (var i = 0; i < appraisal.items.length; i++) {
            var data = {}
            data['name'] = appraisal.items[i].name;
            data['buyprice'] = parseFloat(appraisal.items[i].prices.buy.max) * globalmod
            data['quantity'] = parseInt(json[i]['quantity'])
            buyprices.push(data)
        }
        
        // send packaged json to client
        res.send(JSON.stringify(buyprices))

    });
    










    //res.send('POST: ' + req.body);
})

// IN => Json list with item name+typeids
// OUT => Json containing appraisal data for each item
function getAppraisal(json) {

    var items = []
    var data = {}
    data["market_name"] = "jita"
    
    for (var i = 0; i < json.length; i++) {
        var item = {}
        if (json[i]['item'] !== '') {
            item['name'] = json[i]['item']
            items.push(item)
        }
    }

    data['items'] = items;

    return axios.post(evepraisal, data)
        .then(res => res.data)
        .catch(err => console.error(err))

}

// IN => Json list with item names 
// OUT => Promise containing json linking item names -> typeid
/*
function getTypeidList(json) {

    // ---  get typeid's from fuzzworks using api ---
    var url = endpoint + "typename=" + json[0]['item'];
    // generate url request
    for (var i = 1; i < json.length; i++) {
        url += "|" + json[i]['item']
    }

    url += "&format=json"
    // url = encodeURI(url)

    // send axios post to url

    return axios.get(url)
        .then(res => res.data)
        .catch(err => console.error(err))

} */


module.exports = router;