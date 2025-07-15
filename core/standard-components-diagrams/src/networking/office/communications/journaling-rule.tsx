import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JOURNALING_RULE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.journaling_rule;',
  _width: 52,
  _height: 58,
}

export function JournalingRule(props: DiagramNodeProps) {
  return <Shape {...JOURNALING_RULE} {...props} />
}
