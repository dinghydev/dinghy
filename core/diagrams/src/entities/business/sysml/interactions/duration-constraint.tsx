import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DURATION_CONSTRAINT = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.dimension;rotation=-90;verticalAlign=top;spacingTop=-5',
  },
  _width: 1,
  _height: 250,
}

export function DurationConstraint(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DURATION_CONSTRAINT)} />
}
