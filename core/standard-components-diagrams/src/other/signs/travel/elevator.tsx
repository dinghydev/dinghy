import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELEVATOR = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.elevator;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 65,
  _original_height: 100,
}

export function Elevator(props: DiagramNodeProps) {
  return (
    <Shape {...ELEVATOR} {...props} _style={extendStyle(ELEVATOR, props)} />
  )
}
