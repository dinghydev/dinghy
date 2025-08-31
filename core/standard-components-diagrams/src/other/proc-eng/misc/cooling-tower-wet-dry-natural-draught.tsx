import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COOLING_TOWER_WET_DRY_NATURAL_DRAUGHT = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.cooling_tower_(wet-dry,_natural_draught);',
  _width: 100,
  _height: 120,
}

export function CoolingTowerWetDryNaturalDraught(props: DiagramNodeProps) {
  return (
    <Shape
      {...COOLING_TOWER_WET_DRY_NATURAL_DRAUGHT}
      {...props}
      _style={extendStyle(COOLING_TOWER_WET_DRY_NATURAL_DRAUGHT, props)}
    />
  )
}
