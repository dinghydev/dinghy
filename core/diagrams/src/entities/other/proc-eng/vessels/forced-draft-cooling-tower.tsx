import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FORCED_DRAFT_COOLING_TOWER = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.forced-draft_cooling_tower;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 99,
  _original_height: 99,
}

export function ForcedDraftCoolingTower(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, FORCED_DRAFT_COOLING_TOWER)} />
  )
}
