import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROW_LEFT = {
  _style: {
    entity:
      'shape=mxgraph.arrows.arrow_left;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 97,
  _height: 70,
}

export function ArrowLeft(props: DiagramNodeProps) {
  return (
    <Shape {...ARROW_LEFT} {...props} _style={extendStyle(ARROW_LEFT, props)} />
  )
}
