import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VENT_COVER = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.vent_(cover);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 10,
  _height: 20,
}

export function VentCover(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VENT_COVER)} />
}
