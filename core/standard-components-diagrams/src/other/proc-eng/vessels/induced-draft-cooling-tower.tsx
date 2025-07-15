import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INDUCED_DRAFT_COOLING_TOWER = {
  _style:
    'shape=mxgraph.pid.vessels.induced-draft_cooling_tower;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 98,
  _height: 70,
}

export function InducedDraftCoolingTower(props: DiagramNodeProps) {
  return <Shape {...INDUCED_DRAFT_COOLING_TOWER} {...props} />
}
