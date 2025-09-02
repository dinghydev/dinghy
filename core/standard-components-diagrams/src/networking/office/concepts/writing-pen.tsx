import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WRITING_PEN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.writing_pen;',
  },
  _original_width: 54,
  _original_height: 54,
}

export function WritingPen(props: DiagramNodeProps) {
  return (
    <Shape
      {...WRITING_PEN}
      {...props}
      _style={extendStyle(WRITING_PEN, props)}
    />
  )
}
