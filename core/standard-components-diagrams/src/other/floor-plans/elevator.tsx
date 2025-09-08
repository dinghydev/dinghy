import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ELEVATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.elevator;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Elevator(props: DiagramNodeProps) {
  return (
    <Shape {...ELEVATOR} {...props} _style={extendStyle(ELEVATOR, props)} />
  )
}
