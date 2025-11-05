import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STAY_PUT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.stay_put;',
  },
  _width: 75,
  _height: 7,
}

export function StayPut(props: NodeProps) {
  return (
    <Shape {...STAY_PUT} {...props} _style={extendStyle(STAY_PUT, props)} />
  )
}
