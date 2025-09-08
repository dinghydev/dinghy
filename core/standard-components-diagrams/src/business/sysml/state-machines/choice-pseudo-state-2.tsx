import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHOICE_PSEUDO_STATE_2 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;align=right;verticalAlign=bottom;rounded=0;labelBackgroundColor=none;endArrow=open;endSize=12;',
  },
  _original_width: 1,
  _original_height: 100,
}

export function ChoicePseudoState2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHOICE_PSEUDO_STATE_2}
      {...props}
      _style={extendStyle(CHOICE_PSEUDO_STATE_2, props)}
    />
  )
}
