const axios = require('axios').default;

export const parseItemList = (values) => {
    
    const json = csvJSON(values)

    //console.log(json)

    return new Promise((resolve, reject) => {
        axios
            .post(window.location.href + "request", json, {
                headers: {
                'Content-Type': 'application/json'
                }
            })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err);
            });
    })
}

function csvJSON(csv) {

    var lines = csv.split("\n")

    var result = [];

    const headers = ["item", "quantity", "type"]

    var delimiter = (lines[0].split("\t").length === 1) ? "    " : "\t";

    var columns = (lines[0].split(delimiter).length === 2) ? 2 : 3; // check if 2 or 5 column format. TODO: throw err if neither

    for (var i = 0; i < lines.length; i++) {

        var obj = {};
        var currline = lines[i].split(delimiter);

        for (var j = 0; j < columns; j++) {
            obj[headers[j]] = currline[j];
        }

        result.push(obj)

    }

    return JSON.stringify(result);

}