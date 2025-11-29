import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VENT_BENT = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.vent_(bent);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 10,
  _height: 20,
}

export function VentBent(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VENT_BENT)} />
}
