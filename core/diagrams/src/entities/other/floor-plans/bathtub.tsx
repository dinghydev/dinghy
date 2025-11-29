import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BATHTUB = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.bathtub2;',
  },
  _width: 180,
  _height: 60,
}

export function Bathtub(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BATHTUB)} />
}
