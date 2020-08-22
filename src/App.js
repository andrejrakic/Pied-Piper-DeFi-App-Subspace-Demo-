import React, { useEffect, useState } from 'react';
import { Box, Grommet, DataTable, Text, Image } from 'grommet';
import { PiedPiper } from 'grommet-icons';
// import { pipe } from 'rxjs';
import Subspace, { $latest } from '@embarklabs/subspace';
import Web3 from 'web3';
import exchangeABI from './contracts/exchange_abi.json';

//const web3 = new Web3('https://cloudflare-eth.com');
const web3 = new Web3(
	'https://mainnet.infura.io/v3/a0fa183dda3645a28c90e97094224e2f'
);

const subspace = new Subspace(web3);
var dai = new web3.eth.Contract(
	exchangeABI,
	'0x2a1530C4C41db0B0b2bB646CB5Eb1A67b7158667'
);
const daiContract = subspace.contract(dai);
subspace.init();

function App() {
	const [txnObserver, setObservable] = useState();
	const [last5Observer, setLast5Observer] = useState();
	const [latestBlock, setBlock] = useState();
	const [last5, setLast5] = useState([]);

	// Trade details object for calculating exchange rate
	function TradeDetails(tokensSold, ethBought) {
		this.tokensSold = web3.utils.fromWei(tokensSold);
		this.ethBought = web3.utils.fromWei(ethBought);
		this.exchangeRate = this.tokensSold / this.ethBought;
	}

	// Effect hook to define subspace observables
	useEffect(() => {
		web3.eth.getBlockNumber().then((block) => setBlock(block));
		if (typeof latestBlock != 'number') return;

		const EthPurchased$ = daiContract.events.EthPurchase.track({
			fromBlock: latestBlock - 50,
		});
		const last5$ = EthPurchased$.pipe($latest(5));
		setObservable(EthPurchased$);
		setLast5Observer(last5$);
	}, [setObservable, setLast5Observer, latestBlock]);

	// Effect hook to set up subscription for Uniswap DAI Contract EthPurchase event
	useEffect(() => {
		if (txnObserver === undefined || typeof latestBlock != 'number') {
			return;
		} else {
			txnObserver.subscribe((trade) => {
				//console.log(trade);
			});
		}
		return txnObserver.unsubscribe;
	}, [txnObserver, latestBlock]);

	// Effect hook to source last 5 trades from EthPurchase observable
	useEffect(() => {
		if (last5Observer === undefined) {
			return;
		} else {
			last5Observer.subscribe((fiveTrades) => {
				const prices = fiveTrades.map((trade) => {
					const txnDetails = new TradeDetails(
						trade.tokens_sold,
						trade.eth_bought
					);
					return {
						//block: trade.blockNumber,
						block: trade.buyer,
						rate: txnDetails.exchangeRate,
						ethBought: txnDetails.ethBought,
						tokensSold: txnDetails.tokensSold,
					};
				});
				setLast5(prices);
			});
		}
		return last5Observer.unsubscribe;
	}, [last5Observer]);

	let logInfo = () => console.log('Just testing CI/CD Action');

	useEffect(() => {
		logInfo();
	}, []);

	return (
		<Grommet>
			<AppBar>Pied Piper DeFi App - Subspace Demo</AppBar>
			<Box align='center'>
				<PiedPiper color='plain' size='xlarge' />
				<Text margin='medium' textAlign='center'>
					Average Exchange Rate on 5 latest Uniswap DAI -> ETH trades ={' '}
					{(last5.reduce((a, b) => a + b.rate, 0) / last5.length).toFixed(6)}
				</Text>
			</Box>
			<Tradelist last5={last5} />
			<br />
			<br />
			<Box align='center'>
				<Image src={require('./qrcode.png')} />
			</Box>
		</Grommet>
	);
}

const AppBar = (props) => (
	<Box
		tag='header'
		direction='row'
		align='center'
		alignContent='center'
		background='neutral-1'
		pad={{
			left: 'medium',
			right: 'small',
			vertical: 'small',
		}}
		elevation='medium'
		style={{ zIndex: '1' }}
		{...props}
	/>
);

const Tradelist = (props) => (
	<Box direction='column' align='center' pad='medium'>
		<DataTable
			columns={[
				{
					property: 'block',
					header: <Text weight='bold'>Buyer</Text>,
				},
				{
					property: 'ethBought',
					header: <Text>ETH Bought</Text>,
				},
				{
					property: 'tokensSold',
					header: <Text>DAI Tokens Sold</Text>,
				},
				{
					property: 'rate',
					header: <Text>ETH ---> DAI Exchange Rate</Text>,
					primary: true,
				},
			]}
			data={props.last5}
		/>
	</Box>
);

export default App;
