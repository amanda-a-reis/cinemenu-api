import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

const environment = {
  number: Number(process.env.ENV_NUMBER)
}

export { environment }
