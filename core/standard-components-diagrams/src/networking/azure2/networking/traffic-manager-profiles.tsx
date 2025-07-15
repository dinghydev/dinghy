import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRAFFIC_MANAGER_PROFILES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Traffic_Manager_Profiles.svg;',
  _width: 68,
  _height: 68,
}

export function TrafficManagerProfiles(props: DiagramNodeProps) {
  return <Shape {...TRAFFIC_MANAGER_PROFILES} {...props} />
}
