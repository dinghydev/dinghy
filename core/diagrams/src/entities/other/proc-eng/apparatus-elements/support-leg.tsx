import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUPPORT_LEG = {
  _style: {
    entity:
      'shape=mxgraph.pid.apparatus_elements.support_leg;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 25,
  _height: 100,
}

export function SupportLeg(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SUPPORT_LEG)} />
}
