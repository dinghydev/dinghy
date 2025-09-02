import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TIME_CONSTRAINT = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=none;align=right;labelBackgroundColor=none;',
  },
  _original_width: 4,
  _original_height: 200,
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
