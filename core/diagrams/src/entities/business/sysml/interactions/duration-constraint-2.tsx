import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DURATION_CONSTRAINT_2 = {
  _style: {
    entity: 'edgeStyle=none;dashed=1;endArrow=none;html=1;',
  },
  _width: 2,
  _height: 250,
}

export function DurationConstraint2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DURATION_CONSTRAINT_2)} />
}
