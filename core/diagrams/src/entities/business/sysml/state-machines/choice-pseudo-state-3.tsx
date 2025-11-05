import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHOICE_PSEUDO_STATE_3 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;align=right;endArrow=open;rounded=0;labelBackgroundColor=none;endSize=12;',
  },
  _width: 2,
  _height: 100,
}

export function ChoicePseudoState3(props: NodeProps) {
  return (
    <Shape
      {...CHOICE_PSEUDO_STATE_3}
      {...props}
      _style={extendStyle(CHOICE_PSEUDO_STATE_3, props)}
    />
  )
}
