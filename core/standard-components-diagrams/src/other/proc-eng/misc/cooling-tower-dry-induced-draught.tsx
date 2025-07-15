import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COOLING_TOWER_DRY_INDUCED_DRAUGHT = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.cooling_tower_(dry,_induced_draught);',
  _width: 100,
  _height: 120,
}

export function CoolingTowerDryInducedDraught(props: DiagramNodeProps) {
  return <Shape {...COOLING_TOWER_DRY_INDUCED_DRAUGHT} {...props} />
}
