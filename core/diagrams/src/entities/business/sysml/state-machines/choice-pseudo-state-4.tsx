import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHOICE_PSEUDO_STATE_4 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;align=left;endArrow=open;rounded=0;labelBackgroundColor=none;verticalAlign=bottom;endSize=12;',
  },
  _width: 3,
  _height: 100,
}

export function ChoicePseudoState4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHOICE_PSEUDO_STATE_4)} />
}
