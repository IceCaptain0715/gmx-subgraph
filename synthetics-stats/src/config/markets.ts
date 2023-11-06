function createMarket(
  marketToken: string,
  indexToken: string,
  longToken: string,
  shortToken: string
): MarketInfoConfig {
  return new MarketInfoConfig(marketToken, indexToken, longToken, shortToken);
}

export class MarketInfoConfig {
  constructor(
    public marketToken: string,
    public indexToken: string,
    public longToken: string,
    public shortToken: string
  ) {}
}

export let markets = new Map<string, MarketInfoConfig>();

// goerli

markets.set(
  "0x1012daa9ee5c90136fd3e105b63094aa81a0a64c",
  createMarket(
    "0x1012daa9ee5c90136fd3e105b63094aa81a0a64c",
    "0x13c52ccb49fe3228356d0c355641961646a0d9b2",
    "0xccf73f4dcbbb573296bfa656b754fe94bb957d62",
    "0x04fc936a15352a1b15b3b9c56ea002051e3db3e5"
  )
);

markets.set(
  "0x1529876a9348d61c6c4a3eee1fe6cbf1117ca315",
  createMarket(
    "0x1529876a9348d61c6c4a3eee1fe6cbf1117ca315",
    "0xe39ab88f8a4777030a534146a9ca3b52bd5d43a3",
    "0xe39ab88f8a4777030a534146a9ca3b52bd5d43a3",
    "0x04fc936a15352a1b15b3b9c56ea002051e3db3e5"
  )
);
markets.set(
  "0x1cd5fb2bc5e3071ba5bae1d2952ec0d362d81cb7",
  createMarket(
    "0x1cd5fb2bc5e3071ba5bae1d2952ec0d362d81cb7",
    "0x0000000000000000000000000000000000000000",
    "0x04fc936a15352a1b15b3b9c56ea002051e3db3e5",
    "0xbfcbcdcbcc1b765843dce4df044b92fe68182a62"
  )
);
markets.set(
  "0x22b9076bbcd93e491999aa748fdd6623fa019532",
  createMarket(
    "0x22b9076bbcd93e491999aa748fdd6623fa019532",
    "0xe39ab88f8a4777030a534146a9ca3b52bd5d43a3",
    "0x04fc936a15352a1b15b3b9c56ea002051e3db3e5",
    "0x7b7c6c49fa99b37270077fbfa398748c27046984"
  )
);
markets.set(
  "0x339ef6aacf8f4b2ad15bdcecbeed1842ec4dbcbf",
  createMarket(
    "0x339ef6aacf8f4b2ad15bdcecbeed1842ec4dbcbf",
    "0xccf73f4dcbbb573296bfa656b754fe94bb957d62",
    "0xccf73f4dcbbb573296bfa656b754fe94bb957d62",
    "0x04fc936a15352a1b15b3b9c56ea002051e3db3e5"
  )
);
markets.set(
  "0x4370ad7cb842df8ba2b27d07763908561ba61771",
  createMarket(
    "0x4370ad7cb842df8ba2b27d07763908561ba61771",
    "0x5f8a8f06da2848f846a2b5e3e42a4a2eec5f337b",
    "0xccf73f4dcbbb573296bfa656b754fe94bb957d62",
    "0x7b7c6c49fa99b37270077fbfa398748c27046984"
  )
);
markets.set(
  "0x68ddc36f80199411ba54df30c982255d51a9d358",
  createMarket(
    "0x68ddc36f80199411ba54df30c982255d51a9d358",
    "0xa076e6db62f61bd1a4fc283f84739d2b0c80e2a3",
    "0xccf73f4dcbbb573296bfa656b754fe94bb957d62",
    "0x7b7c6c49fa99b37270077fbfa398748c27046984"
  )
);
markets.set(
  "0x72349b00768601d9598084220224948ce5b6ebdd",
  createMarket(
    "0x72349b00768601d9598084220224948ce5b6ebdd",
    "0xe39ab88f8a4777030a534146a9ca3b52bd5d43a3",
    "0xe39ab88f8a4777030a534146a9ca3b52bd5d43a3",
    "0x7b7c6c49fa99b37270077fbfa398748c27046984"
  )
);
markets.set(
  "0x72b11c5589b41aea9cdcd814bfb19b557aae2844",
  createMarket(
    "0x72b11c5589b41aea9cdcd814bfb19b557aae2844",
    "0x6debb9cc48819941f797a2f0c63f9168c19fd057",
    "0xccf73f4dcbbb573296bfa656b754fe94bb957d62",
    "0x04fc936a15352a1b15b3b9c56ea002051e3db3e5"
  )
);
markets.set(
  "0x76451d352e6d0032694f4db89a6520ab1aa702e2",
  createMarket(
    "0x76451d352e6d0032694f4db89a6520ab1aa702e2",
    "0x7a9ba06548d0499f6debf97809cc351c1e85795d",
    "0xccf73f4dcbbb573296bfa656b754fe94bb957d62",
    "0x7b7c6c49fa99b37270077fbfa398748c27046984"
  )
);
markets.set(
  "0xb883cabec015c36104ab8779e7f3ca96f6073294",
  createMarket(
    "0xb883cabec015c36104ab8779e7f3ca96f6073294",
    "0xe39ab88f8a4777030a534146a9ca3b52bd5d43a3",
    "0x04fc936a15352a1b15b3b9c56ea002051e3db3e5",
    "0x04fc936a15352a1b15b3b9c56ea002051e3db3e5"
  )
);
markets.set(
  "0xbdf740564ba0caa5d74c30c530d63f9f3dfdcc86",
  createMarket(
    "0xbdf740564ba0caa5d74c30c530d63f9f3dfdcc86",
    "0x9a98a11279faeb0ff695dfec3c4b8a29138d0a2f",
    "0xccf73f4dcbbb573296bfa656b754fe94bb957d62",
    "0x04fc936a15352a1b15b3b9c56ea002051e3db3e5"
  )
);
markets.set(
  "0xbdf85aaf3c63cce42ee2f18d75f9fd8aca4d5923",
  createMarket(
    "0xbdf85aaf3c63cce42ee2f18d75f9fd8aca4d5923",
    "0x55602a94239a7926d92da5c53fb96e80372382aa",
    "0xccf73f4dcbbb573296bfa656b754fe94bb957d62",
    "0x7b7c6c49fa99b37270077fbfa398748c27046984"
  )
);
markets.set(
  "0xd886e20f64093ab6e24795952aebc60d012abc9a",
  createMarket(
    "0xd886e20f64093ab6e24795952aebc60d012abc9a",
    "0x7361d58cbc6495b6419397dfd5ebe2e2017f23e9",
    "0xccf73f4dcbbb573296bfa656b754fe94bb957d62",
    "0x04fc936a15352a1b15b3b9c56ea002051e3db3e5"
  )
);
markets.set(
  "0xda83ad3090a4d0861c5bea3f56c082e57bc47c14",
  createMarket(
    "0xda83ad3090a4d0861c5bea3f56c082e57bc47c14",
    "0xccf73f4dcbbb573296bfa656b754fe94bb957d62",
    "0x04fc936a15352a1b15b3b9c56ea002051e3db3e5",
    "0xbfcbcdcbcc1b765843dce4df044b92fe68182a62"
  )
);
markets.set(
  "0xdb6b41bf877a7ca9988efc451922c687ba1a5e2d",
  createMarket(
    "0xdb6b41bf877a7ca9988efc451922c687ba1a5e2d",
    "0xd98d28787f5598749331052f952196428f61e3ad",
    "0xccf73f4dcbbb573296bfa656b754fe94bb957d62",
    "0x04fc936a15352a1b15b3b9c56ea002051e3db3e5"
  )
);
markets.set(
  "0xe501731e05b3af8fe09587057b4884d4b66d2cea",
  createMarket(
    "0xe501731e05b3af8fe09587057b4884d4b66d2cea",
    "0xccf73f4dcbbb573296bfa656b754fe94bb957d62",
    "0xccf73f4dcbbb573296bfa656b754fe94bb957d62",
    "0x7b7c6c49fa99b37270077fbfa398748c27046984"
  )
);
markets.set(
  "0xfb5e4faa671cd65e97d23cdaa70d67bca7e11845",
  createMarket(
    "0xfb5e4faa671cd65e97d23cdaa70d67bca7e11845",
    "0x3e2fa75b78edf836299127fbaa776304b4712972",
    "0xccf73f4dcbbb573296bfa656b754fe94bb957d62",
    "0x7b7c6c49fa99b37270077fbfa398748c27046984"
  )
);

// fuji

markets.set(
  "0x017de90b0fa830c592805c6148c089191716f04c",
  createMarket(
    "0x017de90b0fa830c592805c6148c089191716f04c",
    "0x110892dd5fa73be430c0ade694febd9a4cac68be",
    "0x82f0b3695ed2324e55bbd9a9554cb4192ec3a514",
    "0x51290cb93be5062a6497f16d9cd3376adf54f920"
  )
);
markets.set(
  "0x1d9dc405ccefa78b203bad9cce1b1623d2b25d9e",
  createMarket(
    "0x1d9dc405ccefa78b203bad9cce1b1623d2b25d9e",
    "0x42dd131e1086ffcc59bae9498d71e20e0c889b14",
    "0x82f0b3695ed2324e55bbd9a9554cb4192ec3a514",
    "0x3ebdeaa0db3ffde96e7a0dbbafec961fc50f725f"
  )
);
markets.set(
  "0x4b6ccf6e429f038087a26b13dd6ab4304f7e5df1",
  createMarket(
    "0x4b6ccf6e429f038087a26b13dd6ab4304f7e5df1",
    "0x3bd8e00c25b12e6e60fc8b6f1e1e2236102073ca",
    "0x3bd8e00c25b12e6e60fc8b6f1e1e2236102073ca",
    "0x51290cb93be5062a6497f16d9cd3376adf54f920"
  )
);
markets.set(
  "0x62408de4cb1a499842ec53296ef8dd99a825cceb",
  createMarket(
    "0x62408de4cb1a499842ec53296ef8dd99a825cceb",
    "0xadc4698b257f78187fd675fbf591a09f4c975240",
    "0x82f0b3695ed2324e55bbd9a9554cb4192ec3a514",
    "0x3ebdeaa0db3ffde96e7a0dbbafec961fc50f725f"
  )
);
markets.set(
  "0x695a07d3dd551b0e77a348cc6a873c1eb183fa98",
  createMarket(
    "0x695a07d3dd551b0e77a348cc6a873c1eb183fa98",
    "0xe64dfff37fa6fe969b792b4146cee2774ef6e1a1",
    "0x82f0b3695ed2324e55bbd9a9554cb4192ec3a514",
    "0x51290cb93be5062a6497f16d9cd3376adf54f920"
  )
);
markets.set(
  "0x6d72d2787107c32a48bba4687eb8f9c19fe5e29c",
  createMarket(
    "0x6d72d2787107c32a48bba4687eb8f9c19fe5e29c",
    "0x82f0b3695ed2324e55bbd9a9554cb4192ec3a514",
    "0x3ebdeaa0db3ffde96e7a0dbbafec961fc50f725f",
    "0x51290cb93be5062a6497f16d9cd3376adf54f920"
  )
);
markets.set(
  "0x79e6e0e454de82fa98c02db012a2a69103630b07",
  createMarket(
    "0x79e6e0e454de82fa98c02db012a2a69103630b07",
    "0x3bd8e00c25b12e6e60fc8b6f1e1e2236102073ca",
    "0x3bd8e00c25b12e6e60fc8b6f1e1e2236102073ca",
    "0x3ebdeaa0db3ffde96e7a0dbbafec961fc50f725f"
  )
);
markets.set(
  "0x927f31364b8836021e4f73b27a5d0ebb35c74679",
  createMarket(
    "0x927f31364b8836021e4f73b27a5d0ebb35c74679",
    "0x0d1495527c255068f2f6fee31c85d326d0a76fe8",
    "0x82f0b3695ed2324e55bbd9a9554cb4192ec3a514",
    "0x51290cb93be5062a6497f16d9cd3376adf54f920"
  )
);
markets.set(
  "0xac2c6c1b0cd1cabf78b4e8ad58aa9d43375318cb",
  createMarket(
    "0xac2c6c1b0cd1cabf78b4e8ad58aa9d43375318cb",
    "0x2265f317ea5f47a684e5b26c50948617c945d986",
    "0x82f0b3695ed2324e55bbd9a9554cb4192ec3a514",
    "0x51290cb93be5062a6497f16d9cd3376adf54f920"
  )
);
markets.set(
  "0xbf338a6c595f06b7cfff2fa8c958d49201466374",
  createMarket(
    "0xbf338a6c595f06b7cfff2fa8c958d49201466374",
    "0x82f0b3695ed2324e55bbd9a9554cb4192ec3a514",
    "0x82f0b3695ed2324e55bbd9a9554cb4192ec3a514",
    "0x3ebdeaa0db3ffde96e7a0dbbafec961fc50f725f"
  )
);
markets.set(
  "0xcc6ac193e1d1ef102ecbba864bbfe87e414a7a0d",
  createMarket(
    "0xcc6ac193e1d1ef102ecbba864bbfe87e414a7a0d",
    "0x65ffb5664a7b3377a5a27d9e59c72fb1a5e94962",
    "0x82f0b3695ed2324e55bbd9a9554cb4192ec3a514",
    "0x3ebdeaa0db3ffde96e7a0dbbafec961fc50f725f"
  )
);
markets.set(
  "0xd783eb54407d6d3a4d5c94b634ec9bae3f574098",
  createMarket(
    "0xd783eb54407d6d3a4d5c94b634ec9bae3f574098",
    "0x3bd8e00c25b12e6e60fc8b6f1e1e2236102073ca",
    "0x3ebdeaa0db3ffde96e7a0dbbafec961fc50f725f",
    "0x50df4892bd13f01e4e1cd077ff394a8fa1a3fd7c"
  )
);
markets.set(
  "0xd996ff47a1f763e1e55415bc4437c59292d1f415",
  createMarket(
    "0xd996ff47a1f763e1e55415bc4437c59292d1f415",
    "0x1d308089a2d1ced3f1ce36b1fcaf815b07217be3",
    "0x1d308089a2d1ced3f1ce36b1fcaf815b07217be3",
    "0x3ebdeaa0db3ffde96e7a0dbbafec961fc50f725f"
  )
);
markets.set(
  "0xddf708b284c5c26be67adf9c51dfa935b5035bf8",
  createMarket(
    "0xddf708b284c5c26be67adf9c51dfa935b5035bf8",
    "0x82f0b3695ed2324e55bbd9a9554cb4192ec3a514",
    "0x82f0b3695ed2324e55bbd9a9554cb4192ec3a514",
    "0x51290cb93be5062a6497f16d9cd3376adf54f920"
  )
);
markets.set(
  "0xe28323955c05b75e25b56c1c996c1354eb5aa13d",
  createMarket(
    "0xe28323955c05b75e25b56c1c996c1354eb5aa13d",
    "0x82f0b3695ed2324e55bbd9a9554cb4192ec3a514",
    "0x3ebdeaa0db3ffde96e7a0dbbafec961fc50f725f",
    "0x3ebdeaa0db3ffde96e7a0dbbafec961fc50f725f"
  )
);
markets.set(
  "0xe446e8f7074c0a97bb7cd448fa2cc3346045f514",
  createMarket(
    "0xe446e8f7074c0a97bb7cd448fa2cc3346045f514",
    "0xf62dc1d2452d0893735d22945af53c290b158eaf",
    "0x82f0b3695ed2324e55bbd9a9554cb4192ec3a514",
    "0x3ebdeaa0db3ffde96e7a0dbbafec961fc50f725f"
  )
);
markets.set(
  "0xedf53322e288f597436f5d5849771662aee16a1c",
  createMarket(
    "0xedf53322e288f597436f5d5849771662aee16a1c",
    "0x6bd09e8d65ad5cc761df62454452d4ec1545e647",
    "0x82f0b3695ed2324e55bbd9a9554cb4192ec3a514",
    "0x51290cb93be5062a6497f16d9cd3376adf54f920"
  )
);
markets.set(
  "0xedf9be35be84cd1e39bda59bd7ae8a704c12e06f",
  createMarket(
    "0xedf9be35be84cd1e39bda59bd7ae8a704c12e06f",
    "0x137f4a7336df4f3f11894718528516edaad0b082",
    "0x82f0b3695ed2324e55bbd9a9554cb4192ec3a514",
    "0x3ebdeaa0db3ffde96e7a0dbbafec961fc50f725f"
  )
);

markets.set(
  "0xee8827d67c054caa89c9d6058fdddccd1c499c74",
  createMarket(
    "0xee8827d67c054caa89c9d6058fdddccd1c499c74",
    "0x0000000000000000000000000000000000000000",
    "0x3ebdeaa0db3ffde96e7a0dbbafec961fc50f725f",
    "0x50df4892bd13f01e4e1cd077ff394a8fa1a3fd7c"
  )
);
