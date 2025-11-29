import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRIAD_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.triad_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 97,
  _height: 68,
}

export function TriadArrow(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TRIAD_ARROW)} />
}
