import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COOLING_TOWER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.cooling_tower',
  },
  _width: 100,
  _height: 120,
}

export function CoolingTower(props: DiagramNodeProps) {
  return (
    <Shape
      {...COOLING_TOWER}
      {...props}
      _style={extendStyle(COOLING_TOWER, props)}
    />
  )
}
