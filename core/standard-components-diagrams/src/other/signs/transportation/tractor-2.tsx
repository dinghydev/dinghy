import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRACTOR_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.tractor_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 75,
}

export function Tractor2(props: DiagramNodeProps) {
  return (
    <Shape {...TRACTOR_2} {...props} _style={extendStyle(TRACTOR_2, props)} />
  )
}
