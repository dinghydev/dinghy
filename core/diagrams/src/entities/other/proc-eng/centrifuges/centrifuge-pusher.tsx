import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CENTRIFUGE_PUSHER = {
  _style: {
    entity:
      'shape=mxgraph.pid.centrifuges.centrifuge_(pusher);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 110,
  _height: 100,
}

export function CentrifugePusher(props: NodeProps) {
  return (
    <Shape
      {...CENTRIFUGE_PUSHER}
      {...props}
      _style={extendStyle(CENTRIFUGE_PUSHER, props)}
    />
  )
}
