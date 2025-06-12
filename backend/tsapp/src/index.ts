import { generate_uuid as gu } from '@backend/jslib';

let id: string = gu();
console.log("Hello, from TypeScript app! Generated id=" + id);
