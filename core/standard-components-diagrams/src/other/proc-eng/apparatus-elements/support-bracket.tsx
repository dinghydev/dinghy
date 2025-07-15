import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUPPORT_BRACKET = {
  _style:
    'shape=mxgraph.pid.apparatus_elements.support_bracket;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 10,
  _height: 10,
}

export function SupportBracket(props: DiagramNodeProps) {
  return <Shape {...SUPPORT_BRACKET} {...props} />
}
