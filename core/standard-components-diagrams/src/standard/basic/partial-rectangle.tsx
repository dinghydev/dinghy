import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTIAL_RECTANGLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.rect;fillColor2=none;strokeWidth=1;size=20;indent=5;',
  },
  _original_width: 120,
  _original_height: 60,
}

export function PartialRectangle(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTIAL_RECTANGLE}
      {...props}
      _style={extendStyle(PARTIAL_RECTANGLE, props)}
    />
  )
}
