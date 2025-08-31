import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOOR_2 = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorRight;aspect=fixed;',
  _width: 80,
  _height: 85,
}

export function Door2(props: DiagramNodeProps) {
  return <Shape {...DOOR_2} {...props} _style={extendStyle(DOOR_2, props)} />
}
