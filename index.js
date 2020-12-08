// Retrieve a value from the env object and assign it to a constant
const THE_BEST_FRIES = process.env.THE_BEST_FRIES

console.log('Who has the best fries?')
console.log(`*whispers* ${THE_BEST_FRIES}...`)

// Use destructuring to assign multiple variables at once
const { DATABASE_USER, SPECIAL_API_KEY } = process.env

console.log(`
Two things we should never share publicly...
- our database name, and
- our API key
(${DATABASE_USER} and ${SPECIAL_API_KEY} respectively)
`)

// Set default values for an environment variable
const PORT = process.env.PORT || 3000

console.log(`If this were a server, it'd be listening on port ${PORT}`)