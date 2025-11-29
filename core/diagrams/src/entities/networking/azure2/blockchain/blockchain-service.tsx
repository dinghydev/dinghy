import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BLOCKCHAIN_SERVICE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/blockchain/Azure_Blockchain_Service.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function BlockchainService(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BLOCKCHAIN_SERVICE)} />
}
