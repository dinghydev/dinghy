import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTION_WITH_OUTPUT = {
  _style:
    'shape=mxgraph.uml25.action;html=1;align=center;verticalAlign=middle;absoluteArcSize=1;arcSize=10;dashed=0;spacingRight=10;whiteSpace=wrap;',
  _width: 0,
  _height: 60,
}

export function ActionWithOutput(props: DiagramNodeProps) {
  return <Shape {...ACTION_WITH_OUTPUT} {...props} />
}
