import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TIME_CONSTRAINT = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=none;align=right;labelBackgroundColor=none;',
  },
  _width: 4,
  _height: 200,
}

export function TimeConstraint(props: DiagramNodeProps) {
  return (
    <Shape
      {...TIME_CONSTRAINT}
      {...props}
      _style={extendStyle(TIME_CONSTRAINT, props)}
    />
  )
}
