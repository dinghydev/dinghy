import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRTUAL_PRIVATE_CLOUD_2 = {
  _style: {
    entity:
      'shape=mxgraph.gcp2.doubleRect;fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _original_width: 0,
  _original_height: 68,
}

export function VirtualPrivateCloud2(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_PRIVATE_CLOUD_2}
      {...props}
      _style={extendStyle(VIRTUAL_PRIVATE_CLOUD_2, props)}
    />
  )
}
