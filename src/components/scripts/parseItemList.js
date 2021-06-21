const axios = require('axios').default;

export const parseItemList = (values) => {
    
    const json = csvJSON(values)

    console.log(json)

    axios.post(window.location.href + "request", json, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.error(err);
    });

}

function csvJSON(csv) {

    var lines = csv.split("\n")

    var result = [];

    const headers = ["item", "quantity", "type"]

    var columns = (lines[0].split("\t").length === 2) ? 2 : 3; // check if 2 or 5 column format. TODO: throw err if neither

    for (var i = 0; i < lines.length; i++) {

        var obj = {};
        var currline = lines[i].split("\t");

        for (var j = 0; j < columns; j++) {
            obj[headers[j]] = currline[j];
        }

        result.push(obj)

    }

    return JSON.stringify(result);

}