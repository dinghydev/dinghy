import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DURATION_CONSTRAINT_2 = {
  _style: {
    entity: 'edgeStyle=none;dashed=1;endArrow=none;html=1;',
  },
  _original_width: 2,
  _original_height: 250,
}

export function DurationConstraint2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DURATION_CONSTRAINT_2}
      {...props}
      _style={extendStyle(DURATION_CONSTRAINT_2, props)}
    />
  )
}
