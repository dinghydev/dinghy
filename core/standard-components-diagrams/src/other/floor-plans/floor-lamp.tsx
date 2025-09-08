import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLOOR_LAMP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.floor_lamp;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function FloorLamp(props: DiagramNodeProps) {
  return (
    <Shape {...FLOOR_LAMP} {...props} _style={extendStyle(FLOOR_LAMP, props)} />
  )
}
