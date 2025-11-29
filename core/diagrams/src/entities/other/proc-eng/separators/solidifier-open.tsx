import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SOLIDIFIER_OPEN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.solidifier_(open);',
  },
  _width: 80,
  _height: 120,
}

export function SolidifierOpen(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SOLIDIFIER_OPEN)} />
}
