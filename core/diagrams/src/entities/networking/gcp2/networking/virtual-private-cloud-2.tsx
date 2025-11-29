import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_PRIVATE_CLOUD_2 = {
  _style: {
    entity:
      'shape=mxgraph.gcp2.doubleRect;fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _width: 0,
  _height: 68,
}

export function VirtualPrivateCloud2(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, VIRTUAL_PRIVATE_CLOUD_2)} />
  )
}
