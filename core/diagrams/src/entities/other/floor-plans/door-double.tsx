import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOOR_DOUBLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorDouble;aspect=fixed;',
  },
  _width: 160,
  _height: 85,
}

export function DoorDouble(props: NodeProps) {
  return (
    <Shape
      {...DOOR_DOUBLE}
      {...props}
      _style={extendStyle(DOOR_DOUBLE, props)}
    />
  )
}
