import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHARP_EDGED_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.sharp_edged_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 97,
  _height: 60,
}

export function SharpEdgedArrow(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SHARP_EDGED_ARROW)} />
}
