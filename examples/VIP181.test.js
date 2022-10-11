const { ethers } = require('hardhat')

const contracts = {}
let owner
let user1
let user2

beforeEach(async function () {
  [owner, user1, user2] = await ethers.getSigners()
})


describe('VIP181', () => {
  it('deploys the contract', async () => {
    const VIP181 = await ethers.getContractFactory('TestVIP181')
    contractInstance = await VIP181.deploy("Token", "Symbol")

    expect(contractInstance.address).toBeTruthy()
  })
})
