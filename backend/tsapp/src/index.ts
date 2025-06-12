import { generate_uuid as gu } from '@backend/mylib';

let id: string = gu();
console.log("Hello, from TypeScript app! Generated id=" + id);
