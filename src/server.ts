import {data} from "./data/default";

const investment = 100;
const months = data.length;

let investedPure = 0;
let stockRealtime = 0;
let monthRealtime = 0;

let prevMonthStockPrice: number | null = null;
let prevMonthInflation: number | null = null;
let prevMonthMoneyInStock: number | null = null;
let oneLiterWaterBottlePrice = 1;
let oneLiterWaterBottlePriceBefore = oneLiterWaterBottlePrice;

let gainedByInvestment = 0;
let stockChangeMom = 0;

const investmentMom = data.map(piece => {
    monthRealtime++;

    const boughtStock = investment / piece.stockPrice;
    stockRealtime += boughtStock;

    const currentMoneyInStock = stockRealtime * piece.stockPrice

    if (prevMonthStockPrice && prevMonthMoneyInStock && prevMonthInflation) {
        stockChangeMom = (piece.stockPrice / prevMonthStockPrice) - 1;
        gainedByInvestment = prevMonthMoneyInStock * stockChangeMom;

        oneLiterWaterBottlePrice += oneLiterWaterBottlePrice * prevMonthInflation;
    }

    prevMonthStockPrice = piece.stockPrice;
    prevMonthInflation = piece.inflationMom;
    prevMonthMoneyInStock = currentMoneyInStock;

    investedPure += investment;

    return {
        month: monthRealtime,
        oneLiterWaterBottlePrice: oneLiterWaterBottlePrice,
        stockPrice: piece.stockPrice,
        inflationMom: piece.inflationMom,
        investedPure: investedPure,
        boughtStockCurrentMonth: boughtStock,
        gainedByInvestment: gainedByInvestment,
        currentMoneyInStock: currentMoneyInStock,
        stockChangeMom: stockChangeMom
    };
});

const stockPiecesHolding = investmentMom.reduce((prev, curr) => prev + curr.boughtStockCurrentMonth, 0);
const gainedByInvestmentSum = investmentMom.reduce((prev, curr) => prev + curr.gainedByInvestment, 0);
const stockValueBeforeInflation = stockPiecesHolding * data[months - 1].stockPrice;

const inflation = ((oneLiterWaterBottlePrice / oneLiterWaterBottlePriceBefore) - 1);

const lostByInflationIfKeptCash = investedPure * inflation;
const lostByInflationIfInvested = stockValueBeforeInflation * inflation;
const realValueWouldHaveIfJustHadCash = investedPure - lostByInflationIfKeptCash;
const realValueIfInvestedAfterInflation = stockValueBeforeInflation - lostByInflationIfInvested;

console.log(`Price of 1L bottle of water changed from ${oneLiterWaterBottlePriceBefore}$ to ${oneLiterWaterBottlePrice.toFixed(2)}$ in ${months} months.\nTotal inflation is ${(inflation * 100).toFixed(2)}%`)
console.log({
    cashFlow: investedPure,
    inflation: inflation,
    lostByInflationIfKeptCash: lostByInflationIfKeptCash,
    realValueWouldHaveIfJustHadCash: realValueWouldHaveIfJustHadCash,
    pureValueIfInvestedBeforeInflation: stockValueBeforeInflation,
    lostByInflationIfInvested: lostByInflationIfInvested,
    pureGainedByInvestmentBeforeInflation: gainedByInvestmentSum,
    realValueIfInvestedAfterInflation: realValueIfInvestedAfterInflation,
    stockPiecesHolding: stockPiecesHolding,
});

console.log('\nVerdict\n---------------');

const cashLiters = parseInt((realValueWouldHaveIfJustHadCash - investedPure).toFixed(0));
const stockLiters = parseInt((realValueIfInvestedAfterInflation - investedPure).toFixed(0));

console.log(`If not invested, can buy ~${Math.abs(cashLiters)} liters of water ${cashLiters > 0 ? 'more' : 'less'} than ${months} months ago.` );
console.log(`If invested, can buy ~${Math.abs(stockLiters)} liters of water ${stockLiters > 0 ? 'more' : 'less'} than ${months} months ago.` );

console.log('Info by month: ');
console.log({ investmentMom });

