// ========================
// ---------PORT-----------
// ========================

process.env.PORT = process.env.PORT || 3000

// ========================
// ---------DATABASE-----------
// ========================

process.env.URLDB = 'mongodb://localhost/cafeudemy'

// ========================
// ---------TOKEN----------
// ========================

process.env.SEED = 'my_secret'
process.env.EXPIRED = 60 * 60 * 24 * 30
