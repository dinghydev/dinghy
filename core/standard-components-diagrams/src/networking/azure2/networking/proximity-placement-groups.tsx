import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROXIMITY_PLACEMENT_GROUPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Proximity_Placement_Groups.svg;strokeColor=none;',
  },
  _width: 72,
  _height: 68,
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
