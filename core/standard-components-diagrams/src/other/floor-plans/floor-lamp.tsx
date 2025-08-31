import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLOOR_LAMP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.floor_lamp;',
  },
  _width: 60,
  _height: 60,
}

export function FloorLamp(props: DiagramNodeProps) {
  return (
    <Shape {...FLOOR_LAMP} {...props} _style={extendStyle(FLOOR_LAMP, props)} />
  )
}
