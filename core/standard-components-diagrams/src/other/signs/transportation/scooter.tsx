import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCOOTER = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.scooter;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 64,
}

export function Scooter(props: DiagramNodeProps) {
  return <Shape {...SCOOTER} {...props} _style={extendStyle(SCOOTER, props)} />
}
