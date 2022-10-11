const { ethers } = require('hardhat')

const contracts = {}
let owner
let user1
let user2

beforeEach(async function () {
  [owner, user1, user2] = await ethers.getSigners()
})


describe('VIP180', () => {
  it('deploys the contract', async () => {
    const VIP180 = await ethers.getContractFactory('TestVIP180')
    contractInstance = await VIP180.deploy("Token", "Symbol")

    expect(contractInstance.address).toBeTruthy()
  })
})
