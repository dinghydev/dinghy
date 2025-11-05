import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOOR_SLIDINGGLASS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorSlidingGlass;dx=0.25;',
  },
  _width: 104,
  _height: 10,
}

export function DoorSlidingglass(props: NodeProps) {
  return (
    <Shape
      {...DOOR_SLIDINGGLASS}
      {...props}
      _style={extendStyle(DOOR_SLIDINGGLASS, props)}
    />
  )
}
