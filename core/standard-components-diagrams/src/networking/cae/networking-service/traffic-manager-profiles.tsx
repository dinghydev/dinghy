import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRAFFIC_MANAGER_PROFILES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Traffic_Manager.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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
