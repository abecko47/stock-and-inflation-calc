# stock-and-inflation-calc
Will calculate should you invest or not, dependent on stock price and inflation

Output
```
Price of 1L bottle of water changed from 1$ to 1.07$ in 15 months.
Total inflation is 6.91%
{
  cashFlow: 1500,
  inflation: 0.06910428518903178,
  lostByInflationIfKeptCash: 103.65642778354767,
  realValueWouldHaveIfJustHadCash: 1396.3435722164522,
  pureValueIfInvestedBeforeInflation: 1713.3655514695834,
  lostByInflationIfInvested: 118.40090170181679,
  pureGainedByInvestmentBeforeInflation: 213.36555146958338,
  realValueIfInvestedAfterInflation: 1594.9646497677666,
  stockPiecesHolding: 13.38566837085612
}

Verdict
---------------
If not invested, can buy ~104 liters of water less than 15 months ago.
If invested, can buy ~95 liters of water more than 15 months ago.

Info by month: 
{
  investmentMom: [
    {
      month: 1,
      oneLiterWaterBottlePrice: 1,
      stockPrice: 100,
      inflationMom: 0.005,
      investedPure: 100,
      boughtStockCurrentMonth: 1,
      gainedByInvestment: 0,
      currentMoneyInStock: 100,
      stockChangeMom: 0
    },
    {
      month: 2,
      oneLiterWaterBottlePrice: 1.005,
      stockPrice: 101,
      inflationMom: 0.005,
      investedPure: 200,
      boughtStockCurrentMonth: 0.9900990099009901,
      gainedByInvestment: 1.0000000000000009,
      currentMoneyInStock: 201,
      stockChangeMom: 0.010000000000000009
    },
    {
      month: 3,
      oneLiterWaterBottlePrice: 1.010025,
      stockPrice: 98,
      inflationMom: 0.005,
      investedPure: 300,
      boughtStockCurrentMonth: 1.0204081632653061,
      gainedByInvestment: -5.970297029702976,
      currentMoneyInStock: 295.029702970297,
      stockChangeMom: -0.02970297029702973
    },
    {
      month: 4,
      oneLiterWaterBottlePrice: 1.0150751249999999,
      stockPrice: 105,
      inflationMom: 0.004,
      investedPure: 400,
      boughtStockCurrentMonth: 0.9523809523809523,
      gainedByInvestment: 21.073550212164065,
      currentMoneyInStock: 416.1032531824611,
      stockChangeMom: 0.0714285714285714
    },
    {
      month: 5,
      oneLiterWaterBottlePrice: 1.0191354254999998,
      stockPrice: 104,
      inflationMom: 0.007,
      investedPure: 500,
      boughtStockCurrentMonth: 0.9615384615384616,
      gainedByInvestment: -3.962888125547235,
      currentMoneyInStock: 512.1403650569139,
      stockChangeMom: -0.00952380952380949
    },
    {
      month: 6,
      oneLiterWaterBottlePrice: 1.0262693734784998,
      stockPrice: 107,
      inflationMom: 0.005,
      investedPure: 600,
      boughtStockCurrentMonth: 0.9345794392523364,
      gainedByInvestment: 14.77327976125708,
      currentMoneyInStock: 626.913644818171,
      stockChangeMom: 0.028846153846153744
    },
    {
      month: 7,
      oneLiterWaterBottlePrice: 1.0314007203458924,
      stockPrice: 120,
      inflationMom: 0.008,
      investedPure: 700,
      boughtStockCurrentMonth: 0.8333333333333334,
      gainedByInvestment: 76.16707834239455,
      currentMoneyInStock: 803.0807231605655,
      stockChangeMom: 0.12149532710280364
    },
    {
      month: 8,
      oneLiterWaterBottlePrice: 1.0396519261086594,
      stockPrice: 111,
      inflationMom: 0.005,
      investedPure: 800,
      boughtStockCurrentMonth: 0.9009009009009009,
      gainedByInvestment: -60.23105423704238,
      currentMoneyInStock: 842.849668923523,
      stockChangeMom: -0.07499999999999996
    },
    {
      month: 9,
      oneLiterWaterBottlePrice: 1.0448501857392027,
      stockPrice: 115,
      inflationMom: 0.005,
      investedPure: 900,
      boughtStockCurrentMonth: 0.8695652173913043,
      gainedByInvestment: 30.372961042289184,
      currentMoneyInStock: 973.2226299658122,
      stockChangeMom: 0.03603603603603611
    },
    {
      month: 10,
      oneLiterWaterBottlePrice: 1.0500744366678987,
      stockPrice: 117,
      inflationMom: 0.005,
      investedPure: 1000,
      boughtStockCurrentMonth: 0.8547008547008547,
      gainedByInvestment: 16.92561095592707,
      currentMoneyInStock: 1090.1482409217394,
      stockChangeMom: 0.017391304347825987
    },
    {
      month: 11,
      oneLiterWaterBottlePrice: 1.0553248088512381,
      stockPrice: 118,
      inflationMom: 0.005,
      investedPure: 1100,
      boughtStockCurrentMonth: 0.847457627118644,
      gainedByInvestment: 9.317506332664406,
      currentMoneyInStock: 1199.4657472544038,
      stockChangeMom: 0.008547008547008517
    },
    {
      month: 12,
      oneLiterWaterBottlePrice: 1.0606014328954942,
      stockPrice: 125,
      inflationMom: 0.005,
      investedPure: 1200,
      boughtStockCurrentMonth: 0.8,
      gainedByInvestment: 71.15474771848166,
      currentMoneyInStock: 1370.6204949728856,
      stockChangeMom: 0.05932203389830515
    },
    {
      month: 13,
      oneLiterWaterBottlePrice: 1.0659044400599718,
      stockPrice: 121,
      inflationMom: 0.001,
      investedPure: 1300,
      boughtStockCurrentMonth: 0.8264462809917356,
      gainedByInvestment: -43.85985583913238,
      currentMoneyInStock: 1426.760639133753,
      stockChangeMom: -0.03200000000000003
    },
    {
      month: 14,
      oneLiterWaterBottlePrice: 1.0669703445000318,
      stockPrice: 123,
      inflationMom: 0.002,
      investedPure: 1400,
      boughtStockCurrentMonth: 0.8130081300813008,
      gainedByInvestment: 23.58282048154956,
      currentMoneyInStock: 1550.3434596153027,
      stockChangeMom: 0.016528925619834656
    },
    {
      month: 15,
      oneLiterWaterBottlePrice: 1.0691042851890318,
      stockPrice: 128,
      inflationMom: 0.005,
      investedPure: 1500,
      boughtStockCurrentMonth: 0.78125,
      gainedByInvestment: 63.02209185428077,
      currentMoneyInStock: 1713.3655514695834,
      stockChangeMom: 0.04065040650406515
    }
  ]
}

```

license GNU
