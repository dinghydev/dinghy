import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STYLISED_NOTCHED_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.stylised_notched_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 96,
  _height: 60,
}

export function StylisedNotchedArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...STYLISED_NOTCHED_ARROW}
      {...props}
      _style={extendStyle(STYLISED_NOTCHED_ARROW, props)}
    />
  )
}
