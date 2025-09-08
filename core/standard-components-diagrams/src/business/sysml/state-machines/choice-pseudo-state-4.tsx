import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHOICE_PSEUDO_STATE_4 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;align=left;endArrow=open;rounded=0;labelBackgroundColor=none;verticalAlign=bottom;endSize=12;',
  },
  _original_width: 3,
  _original_height: 100,
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
