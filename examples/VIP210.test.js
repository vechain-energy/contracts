const { ethers } = require('hardhat')

const contracts = {}
let owner
let user1
let user2

beforeEach(async function () {
  [owner, user1, user2] = await ethers.getSigners()
})


describe('VIP210', () => {
  it('deploys the contract', async () => {
    const VIP210 = await ethers.getContractFactory('TestVIP210')
    contractInstance = await VIP210.deploy("uri://")

    expect(contractInstance.address).toBeTruthy()
  })
})
