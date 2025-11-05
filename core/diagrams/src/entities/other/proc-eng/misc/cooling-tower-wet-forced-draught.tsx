import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COOLING_TOWER_WET_FORCED_DRAUGHT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.cooling_tower_(wet,_forced_draught);',
  },
  _width: 100,
  _height: 120,
}

export function CoolingTowerWetForcedDraught(props: NodeProps) {
  return (
    <Shape
      {...COOLING_TOWER_WET_FORCED_DRAUGHT}
      {...props}
      _style={extendStyle(COOLING_TOWER_WET_FORCED_DRAUGHT, props)}
    />
  )
}
