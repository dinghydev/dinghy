import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TIME_CONSTRAINT_2 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=none;align=left;labelBackgroundColor=none;',
  },
  _original_width: 5,
  _original_height: 200,
}

export function TimeConstraint2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TIME_CONSTRAINT_2}
      {...props}
      _style={extendStyle(TIME_CONSTRAINT_2, props)}
    />
  )
}
