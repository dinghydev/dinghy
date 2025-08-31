import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AIRPLANE_3 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.airplane_3;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 97,
  _height: 98,
}

export function Airplane3(props: DiagramNodeProps) {
  return (
    <Shape {...AIRPLANE_3} {...props} _style={extendStyle(AIRPLANE_3, props)} />
  )
}
