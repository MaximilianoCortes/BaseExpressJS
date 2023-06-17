import dotenv from "dotenv";
dotenv.config(); 

const PORT = process.env.PORT;
const OLA = process.env.OLA;

export default { PORT , OLA};