import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DURATION_CONSTRAINT_3 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=open;verticalAlign=bottom;endSize=12;',
  },
  _width: 3,
  _height: 250,
}

export function DurationConstraint3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DURATION_CONSTRAINT_3)} />
}
