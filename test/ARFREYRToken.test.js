const BigNumber = web3.BigNumber;
const ARFREYRToken = artifacts.require("./ARFREYRToken");

require('chai')
	.use(require('chai-bignumber')(BigNumber))
	.should();

contract('ARFREYRToken', accounts => {
	const _name = "ARFREYR";
	const _symbol = "FRY";
	const _decimals = 18;
	const _totalSupply = 7500000000 * 10 ** 18;

	beforeEach(async () => {
		this.token = await ARFREYRToken.new(
			"0x0140d07C422cd24463841cE5e703A01C3859e04a",
			"0x5Da0c10b83754881644d6FA1c1874AA6f8AbA3c4",
			"0xc3F8099e98061cD65B0659Ce811D1Bf56036BB6C");
	});

	describe('token attributes', () => {
		it('has the correct name', async () => {
			const name = await this.token.name();
			name.should.equal(_name);
		})
		it('has the correct symbol', async () => {
			const symbol = await this.token.symbol();
			symbol.should.equal(_symbol);
		})
		it('has the correct decimals', async () => {
			const decimals = await this.token.decimals();
			decimals.should.be.bignumber.equal(_decimals);
		})
		it('has the correct totalSupply', async () => {
			const totalSupply = await this.token.totalSupply();
			totalSupply.should.be.bignumber.equal(_totalSupply);
		})
	})
});