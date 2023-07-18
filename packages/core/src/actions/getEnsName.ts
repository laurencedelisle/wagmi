import type { ChainDoesNotSupportContract, RpcError } from 'viem'
import {
  type GetEnsNameParameters as viem_GetEnsNameParameters,
  type GetEnsNameReturnType as viem_GetEnsNameReturnType,
  getEnsName as viem_getEnsName,
} from 'viem/actions'

import { type Config } from '../config.js'
import { type Evaluate } from '../internal.js'
import type { ChainIdParameter } from '../types/properties.js'

export type GetEnsNameParameters<config extends Config = Config> = Evaluate<
  viem_GetEnsNameParameters & ChainIdParameter<config>
>

export type GetEnsNameReturnType = viem_GetEnsNameReturnType

export type GetEnsNameError =
  // viem getEnsName
  | ChainDoesNotSupportContract
  | RpcError
  // base
  | Error

/** https://wagmi.sh/core/actions/getEnsName */
export function getEnsName<config extends Config>(
  config: config,
  parameters: GetEnsNameParameters<config>,
): Promise<GetEnsNameReturnType> {
  const { chainId } = parameters
  const client = config.getClient({ chainId })
  return viem_getEnsName(client, parameters)
}
