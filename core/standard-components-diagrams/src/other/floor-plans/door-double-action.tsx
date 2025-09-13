import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOOR_DOUBLE_ACTION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorDoubleAction;aspect=fixed;',
  },
  _width: 80,
  _height: 165,
}

export function DoorDoubleAction(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOOR_DOUBLE_ACTION}
      {...props}
      _style={extendStyle(DOOR_DOUBLE_ACTION, props)}
    />
  )
}
