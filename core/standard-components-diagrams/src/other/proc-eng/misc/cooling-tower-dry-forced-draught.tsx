import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COOLING_TOWER_DRY_FORCED_DRAUGHT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.cooling_tower_(dry,_forced_draught);',
  },
  _width: 100,
  _height: 120,
}

export function CoolingTowerDryForcedDraught(props: DiagramNodeProps) {
  return (
    <Shape
      {...COOLING_TOWER_DRY_FORCED_DRAUGHT}
      {...props}
      _style={extendStyle(COOLING_TOWER_DRY_FORCED_DRAUGHT, props)}
    />
  )
}
