import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COOLING_TOWER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.cooling_tower',
  },
  _original_width: 100,
  _original_height: 120,
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
