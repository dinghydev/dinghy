import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOOR_DOUBLE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorDouble;aspect=fixed;',
  _width: 160,
  _height: 85,
}

export function DoorDouble(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOOR_DOUBLE}
      {...props}
      _style={extendStyle(DOOR_DOUBLE, props)}
    />
  )
}
