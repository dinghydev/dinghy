import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MISSION_LANDING_ZONE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Mission_Landing_Zone.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 64,
}

export function MissionLandingZone(props: DiagramNodeProps) {
  return (
    <Shape
      {...MISSION_LANDING_ZONE}
      {...props}
      _style={extendStyle(MISSION_LANDING_ZONE, props)}
    />
  )
}
