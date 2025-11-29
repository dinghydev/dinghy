import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DURATION_CONSTRAINT_5 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=open;verticalAlign=top;spacingTop=5;endSize=12;',
  },
  _width: 5,
  _height: 250,
}

export function DurationConstraint5(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DURATION_CONSTRAINT_5)} />
}
