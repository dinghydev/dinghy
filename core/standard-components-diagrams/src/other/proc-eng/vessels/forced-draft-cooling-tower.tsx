import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FORCED_DRAFT_COOLING_TOWER = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.forced-draft_cooling_tower;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 60,
  _height: 60,
}

export function ForcedDraftCoolingTower(props: DiagramNodeProps) {
  return (
    <Shape
      {...FORCED_DRAFT_COOLING_TOWER}
      {...props}
      _style={extendStyle(FORCED_DRAFT_COOLING_TOWER, props)}
    />
  )
}
