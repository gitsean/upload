var equal = require("deep-equal");

const accountDataFromSystemOne = {
  id: "234",
  number: 56676,
  amount: {
    value: 45887.0973,
    currency: "EUR",
    revalRate: 1.17
  },
  date: "2018-07-24T15:11:09.723Z",
  institution: "Wells Fargo Shareholder SVC",
  abaRouting: "021200025"
};

const accountDataFromSystemTwo = {
  acctNumber: "56676",
  portfolio: "High Net Worth - growth allocation",
  positions: [
    { ticker: "PPL", value: "45,544.99" },
    { ticker: "WGF1", value: "12,590.88" }
  ],
  managed: true
};

const normalizedAccountData = {
  extId: "234",
  accountNumber: "56676",
  amountUSD: "53687.90",
  institutionName: "Wells Fargo Shareholder SVC",
  portfolio: "High Net Worth - growth allocation",
  holdings: [
    { symbol: "PPL", amount: 45544.99 },
    { symbol: "WGF1", amount: 12590.88 }
  ],
  updated: "2018-07-24T15:11:09.723Z"
};

const yourMappingFunction = (acctV1, acctV2) => {
  const holdings = acctV2.positions.map(h => {
    return {
      symbol: h.ticker,
      amount: Number(h.value.replace(",", ""))
    };
  });
  const amountUSD = (acctV1.amount.value * acctV1.amount.revalRate).toFixed(2);
  const merged = {
    extId: acctV1.id,
    accountNumber: acctV2.acctNumber,
    amountUSD,
    institutionName: acctV1.institution,
    portfolio: acctV2.portfolio,
    holdings,
    updated: acctV1.date
  };
  return merged;
};

// This will evaluate as true once the mapping function is implemented correctly.

const merged = yourMappingFunction(
  accountDataFromSystemOne,
  accountDataFromSystemTwo
);

const evaluation = equal(merged, normalizedAccountData);

console.log(" **** Thanks for the challenge! **** ");
console.log("    The Code has run and returned");
console.log(`               ${evaluation}`);
console.log("");
console.log("               0   0");
console.log("                 L");
console.log("               \\___/");
console.log("");
