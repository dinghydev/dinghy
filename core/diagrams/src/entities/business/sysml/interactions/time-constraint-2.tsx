import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TIME_CONSTRAINT_2 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=none;align=left;labelBackgroundColor=none;',
  },
  _width: 5,
  _height: 200,
}

export function TimeConstraint2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TIME_CONSTRAINT_2)} />
}
