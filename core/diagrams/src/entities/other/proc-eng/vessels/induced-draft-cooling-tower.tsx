import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INDUCED_DRAFT_COOLING_TOWER = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.induced-draft_cooling_tower;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 98,
  _height: 70,
}

export function InducedDraftCoolingTower(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDUCED_DRAFT_COOLING_TOWER}
      {...props}
      _style={extendStyle(INDUCED_DRAFT_COOLING_TOWER, props)}
    />
  )
}
