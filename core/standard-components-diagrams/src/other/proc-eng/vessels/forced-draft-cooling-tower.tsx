import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FORCED_DRAFT_COOLING_TOWER = {
  _style:
    'shape=mxgraph.pid.vessels.forced-draft_cooling_tower;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 99,
  _height: 99,
}

export function ForcedDraftCoolingTower(props: DiagramNodeProps) {
  return <Shape {...FORCED_DRAFT_COOLING_TOWER} {...props} />
}
