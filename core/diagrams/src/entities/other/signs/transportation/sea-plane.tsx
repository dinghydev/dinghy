import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEA_PLANE = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.sea_plane;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 68,
}

export function SeaPlane(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SEA_PLANE)} />
}
