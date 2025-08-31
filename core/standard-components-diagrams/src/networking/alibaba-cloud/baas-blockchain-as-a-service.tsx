import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAAS_BLOCKCHAIN_AS_A_SERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.baas_blockchain_as_a_service;',
  _width: 43.199999999999996,
  _height: 47.400000000000006,
}

export function BaasBlockchainAsAService(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAAS_BLOCKCHAIN_AS_A_SERVICE}
      {...props}
      _style={extendStyle(BAAS_BLOCKCHAIN_AS_A_SERVICE, props)}
    />
  )
}
