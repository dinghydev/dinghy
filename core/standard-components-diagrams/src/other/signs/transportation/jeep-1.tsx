import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JEEP_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.jeep_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 53,
}

export function Jeep1(props: DiagramNodeProps) {
  return <Shape {...JEEP_1} {...props} _style={extendStyle(JEEP_1, props)} />
}
