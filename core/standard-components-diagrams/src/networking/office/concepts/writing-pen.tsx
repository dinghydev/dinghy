import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WRITING_PEN = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.writing_pen;',
  _width: 54,
  _height: 54,
}

export function WritingPen(props: DiagramNodeProps) {
  return <Shape {...WRITING_PEN} {...props} />
}
