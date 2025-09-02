import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DURATION_CONSTRAINT_4 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=open;verticalAlign=bottom;spacingBottom=5;endSize=12;',
  },
  _original_width: 4,
  _original_height: 250,
}

export function DurationConstraint4(props: DiagramNodeProps) {
  return (
    <Shape
      {...DURATION_CONSTRAINT_4}
      {...props}
      _style={extendStyle(DURATION_CONSTRAINT_4, props)}
    />
  )
}
