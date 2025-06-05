const { v1: uuidv1 } = require('uuid');

function generate_uuid() {
    let res = uuidv1()
    return res
}

module.exports = {
     generate_uuid,
}