import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXTEND_WITH_CONDITION_3 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=none;rounded=0;labelBackgroundColor=none;dashed=1;exitX=0.5;exitY=1;',
  },
  _width: 2,
  _height: 80,
}

export function ExtendWithCondition3(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, EXTEND_WITH_CONDITION_3)} />
  )
}
