import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELEVATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.elevator;',
  },
  _width: 60,
  _height: 60,
}

export function Elevator(props: DiagramNodeProps) {
  return (
    <Shape {...ELEVATOR} {...props} _style={extendStyle(ELEVATOR, props)} />
  )
}
