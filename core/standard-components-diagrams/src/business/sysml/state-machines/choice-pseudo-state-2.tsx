import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHOICE_PSEUDO_STATE_2 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;align=right;verticalAlign=bottom;rounded=0;labelBackgroundColor=none;endArrow=open;endSize=12;',
  _width: 1,
  _height: 100,
}

export function ChoicePseudoState2(props: DiagramNodeProps) {
  return <Shape {...CHOICE_PSEUDO_STATE_2} {...props} />
}
