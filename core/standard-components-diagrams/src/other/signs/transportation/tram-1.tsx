import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRAM_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.tram_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 51,
}

export function Tram1(props: DiagramNodeProps) {
  return <Shape {...TRAM_1} {...props} _style={extendStyle(TRAM_1, props)} />
}
