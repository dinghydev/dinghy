import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DURATION_CONSTRAINT_3 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=open;verticalAlign=bottom;endSize=12;',
  },
  _width: 3,
  _height: 250,
}

export function DurationConstraint3(props: DiagramNodeProps) {
  return (
    <Shape
      {...DURATION_CONSTRAINT_3}
      {...props}
      _style={extendStyle(DURATION_CONSTRAINT_3, props)}
    />
  )
}
