import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FLOOR_LAMP = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.floor_lamp;',
  _width: 50,
  _height: 50,
}

export function FloorLamp(props: DiagramNodeProps) {
  return <Shape {...FLOOR_LAMP} {...props} />
}
