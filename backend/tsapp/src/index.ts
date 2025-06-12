// import { generate_uuid as gu } from '@backend/mylib';
import MyLib from '@backend/mylib';
const { generate_uuid: gu } = MyLib;

let id: string = gu();
console.log("Hello, from TypeScript app! Generated id=" + id);
