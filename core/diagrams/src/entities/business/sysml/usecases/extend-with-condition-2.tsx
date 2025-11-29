import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXTEND_WITH_CONDITION_2 = {
  _style: {
    entity:
      'align=right;html=1;verticalAlign=bottom;rounded=0;labelBackgroundColor=none;endArrow=open;endSize=12;dashed=1;',
  },
  _width: 1,
  _height: 80,
}

export function ExtendWithCondition2(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, EXTEND_WITH_CONDITION_2)} />
  )
}
