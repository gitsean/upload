const mapIt = (acctV1, acctV2) => {
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

module.exports = mapIt;
