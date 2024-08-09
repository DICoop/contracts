const network = {
  protocol: 'http',
  host: 'localhost',
  port: ':8888',
  registrator: 'http://127.0.0.1:5010',
  coopBackend: 'http://127.0.0.1:2998',
}

const SYMBOL = 'AXON'
const GOVERN_SYMBOL = 'RUB'
const provider = 'voskhod'
const provider_chairman = 'ant'
const public_key = 'EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV'
const private_key = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3'

export default {
  network,
  default_public_key: public_key,
  system: 'eosio',
  provider,
  provider_chairman,
  private_keys: [
    private_key,
  ],
  emission: {
    left_border: `1000.0000 ${SYMBOL}`,
    tact_duration: 86400,
    emission_factor: 0.618,
  },
  token: {
    symbol: SYMBOL,
    govern_symbol: GOVERN_SYMBOL,
    precision: 4,
    max_supply: `1000000000.0000 ${SYMBOL}`,
  },
  powerup: {
    days: 30,
    min_powerup: `0.0001 ${SYMBOL}`,
  },
  allocations: [
    {
      to: 'eosio',
      quantity: `10000.0000 ${SYMBOL}`,
    },
  ],
  accounts: [
    {
      name: 'eosio.token',
    },
    {
      name: 'eosio.bpay',
    },
    {
      name: 'eosio.vpay',
    },
    {
      name: 'eosio.msig',
    },
    {
      name: 'eosio.wrap',
    },
    {
      name: 'eosio.power',
    },
    {
      name: 'eosio.saving',
      code_permissions_to: ['eosio.saving'],
    },
    {
      name: 'registrator',
      code_permissions_to: ['registrator'],
    },
    {
      name: 'soviet',
      code_permissions_to: ['soviet'],
    },
    {
      name: 'marketplace',
      code_permissions_to: ['marketplace'],
    },
    {
      name: 'draft',
      code_permissions_to: ['draft'],
    },
    {
      name: 'gateway',
      code_permissions_to: ['gateway'],
    },
    {
      name: 'fund',
      code_permissions_to: ['fund'],
    },
    {
      name: provider_chairman,
    },
    {
      name: provider,
      code_permissions_to: ['registrator'],
    },

  ],
  contracts: [
    {
      name: 'eosio.boot',
      path: '/Users/darksun/dacom-code/foundation/contracts/system/build/contracts/eosio.boot',
      target: 'eosio',
    },
    {
      name: 'eosio.system',
      path: '/Users/darksun/dacom-code/foundation/contracts/system/build/contracts/eosio.system',
      target: 'eosio',
    },
    {
      name: 'eosio.token',
      path: '/Users/darksun/dacom-code/foundation/contracts/system/build/contracts/eosio.token',
      target: 'eosio.token',
    },
    {
      name: 'eosio.msig',
      path: '/Users/darksun/dacom-code/foundation/contracts/system/build/contracts/eosio.msig',
      target: 'eosio.msig',
    },
    {
      name: 'eosio.wrap',
      path: '/Users/darksun/dacom-code/foundation/contracts/system/build/contracts/eosio.wrap',
      target: 'eosio.wrap',
    },
    {
      name: 'registrator',
      path: '/Users/darksun/dacom-code/foundation/contracts/registrator',
      target: 'registrator',
    },
    {
      name: 'soviet',
      path: '/Users/darksun/dacom-code/foundation/contracts/soviet',
      target: 'soviet',
    },
    {
      name: 'marketplace',
      path: '/Users/darksun/dacom-code/foundation/contracts/marketplace',
      target: 'marketplace',
    },
    {
      name: 'draft',
      path: '/Users/darksun/dacom-code/foundation/contracts/draft',
      target: 'draft',
    },
    {
      name: 'gateway',
      path: '/Users/darksun/dacom-code/foundation/contracts/gateway',
      target: 'gateway',
    },
    {
      name: 'fund',
      path: '/Users/darksun/dacom-code/foundation/contracts/fund',
      target: 'fund',
    },
  ],
  features: [
    {
      name: 'ACTION_RETURN_VALUE',
      hash: 'c3a6138c5061cf291310887c0b5c71fcaffeab90d5deb50d3b9e687cead45071',
    },
    {
      name: 'CONFIGURABLE_WASM_LIMITS2',
      hash: 'd528b9f6e9693f45ed277af93474fd473ce7d831dae2180cca35d907bd10cb40',
    },
    {
      name: 'BLOCKCHAIN_PARAMETERS',
      hash: '5443fcf88330c586bc0e5f3dee10e7f63c76c00249c87fe4fbf7f38c082006b4',
    },
    {
      name: 'GET_SENDER',
      hash: 'f0af56d2c5a48d60a4a5b5c903edfb7db3a736a94ed589d0b797df33ff9d3e1d',
    },
    {
      name: 'FORWARD_SETCODE',
      hash: '2652f5f96006294109b3dd0bbde63693f55324af452b799ee137a81a905eed25',
    },
    {
      name: 'ONLY_BILL_FIRST_AUTHORIZER',
      hash: '8ba52fe7a3956c5cd3a656a3174b931d3bb2abb45578befc59f283ecd816a405',
    },
    {
      name: 'RESTRICT_ACTION_TO_SELF',
      hash: 'ad9e3d8f650687709fd68f4b90b41f7d825a365b02c23a636cef88ac2ac00c43',
    },
    {
      name: 'DISALLOW_EMPTY_PRODUCER_SCHEDULE',
      hash: '68dcaa34c0517d19666e6b33add67351d8c5f69e999ca1e37931bc410a297428',
    },
    {
      name: 'FIX_LINKAUTH_RESTRICTION',
      hash: 'e0fb64b1085cc5538970158d05a009c24e276fb94e1a0bf6a528b48fbc4ff526',
    },
    {
      name: 'REPLACE_DEFERRED',
      hash: 'ef43112c6543b88db2283a2e077278c315ae2c84719a8b25f25cc88565fbea99',
    },
    {
      name: 'NO_DUPLICATE_DEFERRED_ID',
      hash: '4a90c00d55454dc5b059055ca213579c6ea856967712a56017487886a4d4cc0f',
    },
    {
      name: 'ONLY_LINK_TO_EXISTING_PERMISSION',
      hash: '1a99a59d87e06e09ec5b028a9cbb7749b4a5ad8819004365d02dc4379a8b7241',
    },
    {
      name: 'RAM_RESTRICTIONS',
      hash: '4e7bf348da00a945489b2a681749eb56f5de00b900014e137ddae39f48f69d67',
    },
    {
      name: 'WEBAUTHN_KEY',
      hash: '4fca8bd82bbd181e714e283f83e1b45d95ca5af40fb89ad3977b653c448f78c2',
    },
    {
      name: 'WTMSIG_BLOCK_SIGNATURES',
      hash: '299dcb6af692324b899b39f16d5a530a33062804e41f09dc97e9f156b4476707',
    },
    {
      name: 'GET_CODE_HASH',
      hash: 'bcd2a26394b36614fd4894241d3c451ab0f6fd110958c3423073621a70826e99',
    },
    {
      name: 'GET_BLOCK_NUM',
      hash: '35c2186cc36f7bb4aeaf4487b36e57039ccf45a9136aa856a5d569ecca55ef2b',
    },
    {
      name: 'CRYPTO_PRIMITIVES',
      hash: '6bcb40a24e49c26d0a60513b6aeb8551d264e4717f306b81a37a5afb3b47cedc',
    },
  ],
}
