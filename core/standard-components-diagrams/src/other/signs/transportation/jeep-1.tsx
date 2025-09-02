import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JEEP_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.jeep_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 53,
}

export function Jeep1(props: DiagramNodeProps) {
  return <Shape {...JEEP_1} {...props} _style={extendStyle(JEEP_1, props)} />
}
