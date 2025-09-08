import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DURATION_CONSTRAINT_5 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=open;verticalAlign=top;spacingTop=5;endSize=12;',
  },
  _original_width: 5,
  _original_height: 250,
}

export function DurationConstraint5(props: DiagramNodeProps) {
  return (
    <Shape
      {...DURATION_CONSTRAINT_5}
      {...props}
      _style={extendStyle(DURATION_CONSTRAINT_5, props)}
    />
  )
}
