import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DURATION_CONSTRAINT = {
  _style:
    'html=1;shape=mxgraph.sysml.dimension;rotation=-90;verticalAlign=top;spacingTop=-5',
  _width: 1,
  _height: 250,
}

export function DurationConstraint(props: DiagramNodeProps) {
  return <Shape {...DURATION_CONSTRAINT} {...props} />
}
