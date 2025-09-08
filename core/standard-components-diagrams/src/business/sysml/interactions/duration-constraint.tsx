import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DURATION_CONSTRAINT = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.dimension;rotation=-90;verticalAlign=top;spacingTop=-5',
  },
  _original_width: 1,
  _original_height: 250,
}

export function DurationConstraint(props: DiagramNodeProps) {
  return (
    <Shape
      {...DURATION_CONSTRAINT}
      {...props}
      _style={extendStyle(DURATION_CONSTRAINT, props)}
    />
  )
}
