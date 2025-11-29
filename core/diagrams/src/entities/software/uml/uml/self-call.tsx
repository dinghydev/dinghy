import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SELF_CALL = {
  _style: {
    entity:
      'html=1;align=left;spacingLeft=2;endArrow=block;rounded=0;edgeStyle=orthogonalEdgeStyle;curved=0;rounded=0;',
  },
  _width: 1,
  _height: 60,
}

export function SelfCall(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SELF_CALL)} />
}
