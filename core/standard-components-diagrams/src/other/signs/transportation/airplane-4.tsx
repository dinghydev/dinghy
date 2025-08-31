import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AIRPLANE_4 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.airplane_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 91,
  _height: 98,
}

export function Airplane4(props: DiagramNodeProps) {
  return (
    <Shape {...AIRPLANE_4} {...props} _style={extendStyle(AIRPLANE_4, props)} />
  )
}
