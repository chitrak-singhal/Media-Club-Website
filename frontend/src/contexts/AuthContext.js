import bcrypt from 'bcrypt';
const hashpassword = await bcrypt.hash("chitrak",10);
console.log(hashpassword);
