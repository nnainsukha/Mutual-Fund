const FundsData = [
  {
    name: "Axis Bluechip Fund",
    category: "Large Cap",
    rating: "5",
    oneyear: "11.5%",
    threeyear: "25.6%",
    fiveyear: "35.6%",
    type: "Equity",
    risk: "Low Risk",
    nav: "Rs.156",
    sip: "100",
    fundsize: "5,037.4Cr",
    investmentobj:
      "Axis Bluechip Fund scheme aims to generate long term capital growth by investing in a diversified portfolio predominantly consisting of equity and equity related instruments of large cap companies.",
    key: "1",
  },
  {
    name: "Kotak Bluechip Fund",
    category: "Large Cap",
    rating: "4",
    oneyear: "10.5%",
    threeyear: "22.6%",
    fiveyear: "31.6%",
    type: "Liquid",
    risk: "High Risk",
    nav: "Rs.165",
    sip: "500",
    fundsize: "3,434.4Cr",
    investmentobj:
      "Kotak Bluechip Fund scheme aims to generate long term capital growth by investing in a diversified portfolio predominantly consisting of equity and equity related instruments of large cap companies.",
    key: "2",
  },
  {
    name: "IDFC Largecap Fund",
    category: "Mid Cap",
    rating: "4",
    oneyear: "8.5%",
    threeyear: "19.6%",
    fiveyear: "34.6%",
    type: "Debt",
    risk: "Low Risk",
    nav: "Rs.176",
    sip: "100",
    fundsize: "2,098.4Cr",
    investmentobj:
      "IDFC Largecap Fund scheme aims to generate long term capital growth by investing in a diversified portfolio predominantly consisting of equity and equity related instruments of large cap companies.",
    key: "3",
  },
  {
    name: "Baroda Mutual Fund",
    category: "Small Cap",
    rating: "3",
    oneyear: "9.5%",
    threeyear: "20.6%",
    fiveyear: "37.6%",
    type: "Index",
    risk: "Moderate Risk",
    nav: "Rs.169",
    sip: "300",
    fundsize: "6,132.4Cr",
    investmentobj:
      "Baroda Mutual Fund scheme aims to generate long term capital growth by investing in a diversified portfolio predominantly consisting of equity and equity related instruments of large cap companies.",
    key: "4",
  },
  {
    name: "IDBI Largecap Fund",
    category: "Large Cap",
    rating: "3",
    oneyear: "9.5%",
    threeyear: "21.6%",
    fiveyear: "33.6%",
    type: "Equity",
    risk: "High Risk",
    nav: "Rs.178",
    sip: "400",
    fundsize: "3,638.4Cr",
    investmentobj:
      "IDBI Largecap Fund scheme aims to generate long term capital growth by investing in a diversified portfolio predominantly consisting of equity and equity related instruments of large cap companies.",
    key: "5",
  },
];

const Images = {
  ratings: {
    1: require("../assets/ratings-1.png"),
    2: require("../assets/ratings-2.png"),
    3: require("../assets/ratings-3.png"),
    4: require("../assets/ratings-4.png"),
    5: require("../assets/ratings-5.png"),
  },
};

const Logo = {
  logos: {
    "Axis Bluechip Fund": require("../assets/axis.png"),
    "Kotak Bluechip Fund": require("../assets/kotak.png"),
    "IDFC Largecap Fund": require("../assets/idfc.png"),
    "Baroda Mutual Fund": require("../assets/baroda.png"),
    "IDBI Largecap Fund": require("../assets/idbi.png"),
  },
};

const GraphData = {
  data: {
    "Axis Bluechip Fund": [20, 31, 48, 51, 57, 60],
    "Kotak Bluechip Fund": [50, 31, 48, 51, 57, 30],
    "IDFC Largecap Fund": [40, 31, 51, 51, 57, 60],
    "Baroda Mutual Fund": [60, 31, 48, 51, 57, 90],
    "IDBI Largecap Fund": [70, 31, 87, 51, 57, 60],
  },
};

export { FundsData, Images, Logo, GraphData };
