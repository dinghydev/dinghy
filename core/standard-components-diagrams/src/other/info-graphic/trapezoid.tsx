import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRAPEZOID = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.parallelogram;dx=15;fillColor=#10739E;strokeColor=none;',
  },
  _original_width: 100,
  _original_height: 70,
}

export function Trapezoid(props: DiagramNodeProps) {
  return (
    <Shape {...TRAPEZOID} {...props} _style={extendStyle(TRAPEZOID, props)} />
  )
}
