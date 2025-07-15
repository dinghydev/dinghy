import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROXIMITY_PLACEMENT_GROUPS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Proximity_Placement_Groups.svg;',
  _width: 72,
  _height: 68,
}

export function ProximityPlacementGroups(props: DiagramNodeProps) {
  return <Shape {...PROXIMITY_PLACEMENT_GROUPS} {...props} />
}
