import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ANTENNA = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.aerial_-_antenna_1;',
  },
  _width: 80,
  _height: 100,
}

export function Antenna(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ANTENNA)} />
}
