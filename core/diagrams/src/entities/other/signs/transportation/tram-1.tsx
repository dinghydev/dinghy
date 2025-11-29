import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRAM_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.tram_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 51,
}

export function Tram1(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TRAM_1)} />
}
