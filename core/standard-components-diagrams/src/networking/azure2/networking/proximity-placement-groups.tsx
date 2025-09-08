import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROXIMITY_PLACEMENT_GROUPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Proximity_Placement_Groups.svg;strokeColor=none;',
  },
  _original_width: 72,
  _original_height: 68,
}

export function ProximityPlacementGroups(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROXIMITY_PLACEMENT_GROUPS}
      {...props}
      _style={extendStyle(PROXIMITY_PLACEMENT_GROUPS, props)}
    />
  )
}
