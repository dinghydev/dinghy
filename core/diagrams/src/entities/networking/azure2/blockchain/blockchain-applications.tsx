import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BLOCKCHAIN_APPLICATIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/blockchain/Blockchain_Applications.svg;strokeColor=none;',
  },
  _original_width: 48.4,
  _original_height: 68,
}

export function BlockchainApplications(props: NodeProps) {
  return (
    <Shape
      {...BLOCKCHAIN_APPLICATIONS}
      {...props}
      _style={extendStyle(BLOCKCHAIN_APPLICATIONS, props)}
    />
  )
}
