import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CENTRIFUGE_HIGH_SPEED = {
  _style: {
    entity:
      'shape=mxgraph.pid.centrifuges.centrifuge_(high_speed);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 110,
}

export function CentrifugeHighSpeed(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CENTRIFUGE_HIGH_SPEED)} />
}
