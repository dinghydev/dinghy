import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DURATION_CONSTRAINT_3 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=open;verticalAlign=bottom;endSize=12;',
  },
  _original_width: 3,
  _original_height: 250,
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
