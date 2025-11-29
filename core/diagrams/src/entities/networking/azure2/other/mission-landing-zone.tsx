import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MISSION_LANDING_ZONE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Mission_Landing_Zone.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 64,
}

export function MissionLandingZone(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MISSION_LANDING_ZONE)} />
}
