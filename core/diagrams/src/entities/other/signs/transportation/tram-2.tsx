import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRAM_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.tram_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 52,
}

export function Tram2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TRAM_2)} />
}
