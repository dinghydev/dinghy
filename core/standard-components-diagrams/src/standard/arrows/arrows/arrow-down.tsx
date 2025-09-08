import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARROW_DOWN = {
  _style: {
    entity:
      'shape=mxgraph.arrows.arrow_down;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 70,
  _original_height: 97,
}

export function ArrowDown(props: DiagramNodeProps) {
  return (
    <Shape {...ARROW_DOWN} {...props} _style={extendStyle(ARROW_DOWN, props)} />
  )
}
