import { expect, test } from 'vitest'

import * as core from './index.js'

test('exports', () => {
  expect(Object.keys(core)).toMatchInlineSnapshot(`
    [
      "connect",
      "disconnect",
      "getAccount",
      "watchAccount",
      "getBalance",
      "watchBalance",
      "getBlockNumber",
      "watchBlockNumber",
      "getChainId",
      "watchChainId",
      "getConnections",
      "watchConnections",
      "reconnect",
      "signMessage",
      "switchAccount",
      "switchChain",
      "writeContract",
      "createConfig",
      "createConnector",
      "BaseError",
      "ProviderNotFoundError",
      "SwitchChainNotSupportedError",
      "ChainMismatchError",
      "ChainNotConfiguredError",
      "ConnectorAlreadyConnectedError",
      "ConnectorNotFoundError",
      "createStorage",
      "noopStorage",
      "deserialize",
      "normalizeChainId",
      "serialize",
    ]
  `)
})
