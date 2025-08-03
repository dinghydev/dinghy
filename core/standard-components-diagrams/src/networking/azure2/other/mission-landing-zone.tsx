import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MISSION_LANDING_ZONE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Mission_Landing_Zone.svg;strokeColor=none;',
  _width: 68,
  _height: 64,
}

export function MissionLandingZone(props: DiagramNodeProps) {
  return <Shape {...MISSION_LANDING_ZONE} {...props} />
}
