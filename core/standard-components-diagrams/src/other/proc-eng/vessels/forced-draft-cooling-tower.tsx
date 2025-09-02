import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FORCED_DRAFT_COOLING_TOWER = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.forced-draft_cooling_tower;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 99,
  _original_height: 99,
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
