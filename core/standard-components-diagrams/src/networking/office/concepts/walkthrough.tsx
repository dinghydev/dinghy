import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WALKTHROUGH = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.walkthrough;',
  _width: 41,
  _height: 58,
}

export function Walkthrough(props: DiagramNodeProps) {
  return <Shape {...WALKTHROUGH} {...props} />
}
