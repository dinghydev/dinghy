import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRAPEZOID = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.parallelogram;dx=15;fillColor=#10739E;strokeColor=none;',
  },
  _width: 100,
  _height: 70,
}

export function Trapezoid(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TRAPEZOID)} />
}
