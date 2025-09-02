import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRAFFIC_MANAGER_PROFILES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Traffic_Manager_Profiles.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function TrafficManagerProfiles(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRAFFIC_MANAGER_PROFILES}
      {...props}
      _style={extendStyle(TRAFFIC_MANAGER_PROFILES, props)}
    />
  )
}
