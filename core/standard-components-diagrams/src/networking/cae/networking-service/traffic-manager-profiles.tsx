import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRAFFIC_MANAGER_PROFILES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Traffic_Manager.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
