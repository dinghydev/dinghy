import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JEEP_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.jeep_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 48,
}

export function Jeep2(props: DiagramNodeProps) {
  return <Shape {...JEEP_2} {...props} _style={extendStyle(JEEP_2, props)} />
}
