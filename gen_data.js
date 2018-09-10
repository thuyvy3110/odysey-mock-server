
const faker = require('faker')
module.exports = () => {
	
  const data = { users: [] }
  // Create 1000 users
  for (let i = 0; i < 10; i++) {
	const firstName = faker.name.firstName()
    const lastName = faker.name.firstName()
    const phoneNumber = faker.phone.phoneNumberFormat()
    data.users.push(
	{ 
		id: i, 
		firstName: firstName ,
		lastName: lastName,
		phoneNumber: phoneNumber
	});
  }
  return data
}