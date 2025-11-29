import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHOICE_PSEUDO_STATE_2 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;align=right;verticalAlign=bottom;rounded=0;labelBackgroundColor=none;endArrow=open;endSize=12;',
  },
  _width: 1,
  _height: 100,
}

export function ChoicePseudoState2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHOICE_PSEUDO_STATE_2)} />
}
