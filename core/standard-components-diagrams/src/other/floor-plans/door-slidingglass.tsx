import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOOR_SLIDINGGLASS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorSlidingGlass;dx=0.25;',
  },
  _original_width: 104,
  _original_height: 10,
}

export function DoorSlidingglass(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOOR_SLIDINGGLASS}
      {...props}
      _style={extendStyle(DOOR_SLIDINGGLASS, props)}
    />
  )
}
