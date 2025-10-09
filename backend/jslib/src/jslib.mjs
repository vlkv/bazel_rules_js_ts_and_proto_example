import { v1 as uuidv1 } from 'uuid';

function generate_uuid() {
    let res = uuidv1()
    return res
}

export { generate_uuid };
