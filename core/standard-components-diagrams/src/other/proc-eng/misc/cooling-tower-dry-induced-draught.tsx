import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COOLING_TOWER_DRY_INDUCED_DRAUGHT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.cooling_tower_(dry,_induced_draught);',
  },
  _original_width: 100,
  _original_height: 120,
}

export function CoolingTowerDryInducedDraught(props: DiagramNodeProps) {
  return (
    <Shape
      {...COOLING_TOWER_DRY_INDUCED_DRAUGHT}
      {...props}
      _style={extendStyle(COOLING_TOWER_DRY_INDUCED_DRAUGHT, props)}
    />
  )
}
