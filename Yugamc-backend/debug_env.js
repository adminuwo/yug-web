require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
console.log('Keys in process.env:', Object.keys(process.env).filter(k => k.includes('MONGO') || k.includes('PORT')));
console.log('MONGO_URI is:', process.env.MONGO_URI ? 'Defined' : 'Undefined');
