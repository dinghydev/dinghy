import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DURATION_CONSTRAINT_5 = {
  _style:
    'edgeStyle=none;html=1;endArrow=open;verticalAlign=top;spacingTop=5;endSize=12;',
  _width: 5,
  _height: 250,
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
