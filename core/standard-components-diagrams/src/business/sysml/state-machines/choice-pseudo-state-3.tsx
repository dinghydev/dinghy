import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHOICE_PSEUDO_STATE_3 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;align=right;endArrow=open;rounded=0;labelBackgroundColor=none;endSize=12;',
  _width: 2,
  _height: 100,
}

export function ChoicePseudoState3(props: DiagramNodeProps) {
  return <Shape {...CHOICE_PSEUDO_STATE_3} {...props} />
}
