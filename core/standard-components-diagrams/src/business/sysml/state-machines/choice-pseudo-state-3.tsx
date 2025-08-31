import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHOICE_PSEUDO_STATE_3 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;align=right;endArrow=open;rounded=0;labelBackgroundColor=none;endSize=12;',
  _width: 2,
  _height: 100,
}

export function ChoicePseudoState3(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHOICE_PSEUDO_STATE_3}
      {...props}
      _style={extendStyle(CHOICE_PSEUDO_STATE_3, props)}
    />
  )
}
