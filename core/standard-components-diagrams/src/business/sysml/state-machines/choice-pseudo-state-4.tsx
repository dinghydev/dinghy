import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHOICE_PSEUDO_STATE_4 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;align=left;endArrow=open;rounded=0;labelBackgroundColor=none;verticalAlign=bottom;endSize=12;',
  _width: 3,
  _height: 100,
}

export function ChoicePseudoState4(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHOICE_PSEUDO_STATE_4}
      {...props}
      _style={extendStyle(CHOICE_PSEUDO_STATE_4, props)}
    />
  )
}
