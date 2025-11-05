import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TIME_CONSTRAINT = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=none;align=right;labelBackgroundColor=none;',
  },
  _width: 4,
  _height: 200,
}

export function TimeConstraint(props: NodeProps) {
  return (
    <Shape
      {...TIME_CONSTRAINT}
      {...props}
      _style={extendStyle(TIME_CONSTRAINT, props)}
    />
  )
}
