import dotenv from "dotenv"

dotenv.config({quiet:true})

export const ENV={
    PORT: process.env.PORT || 5000,
    ENV_MODE:process.env.ENV_MODE,
    DB_URL:process.env.DB_URL,

}