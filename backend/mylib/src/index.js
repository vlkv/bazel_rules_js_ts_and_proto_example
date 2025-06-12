
const MyLib = require('./mylib');

// CommonJS export (for backward compatibility)
module.exports.generate_uuid = MyLib.generate_uuid;

// ES6 export (for TypeScript)
// export const generate_uuid = MyLib.generate_uuid;
