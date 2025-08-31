import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CAMPER_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.camper_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 59,
}

export function Camper2(props: DiagramNodeProps) {
  return (
    <Shape {...CAMPER_2} {...props} _style={extendStyle(CAMPER_2, props)} />
  )
}
