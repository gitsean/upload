const mapIt = require("./mapping");
var equal = require("deep-equal");

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

test("mapIt should return object as expected", () => {
  const mapped = mapIt(accountDataFromSystemOne, accountDataFromSystemTwo);
  expect(equal(mapped, normalizedAccountData)).toBe(true);
});
