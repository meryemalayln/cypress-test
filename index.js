const fs = require('fs');
const _dirPath = "./cypress/results";
const result_file = "./cypress/results/mochawesome.json";
const cypress = require('cypress');

 function lambda_cypress(){
    if (fs.existsSync(_dirPath)) {
        let file = JSON.parse(fs.readFileSync(result_file))
        if(file['stats']['failures'] != 0){
            fs.unlinkSync(result_file)
            cypress.run({})
        }
    } else {
        cypress.run({})
    }
}
lambda_cypress()