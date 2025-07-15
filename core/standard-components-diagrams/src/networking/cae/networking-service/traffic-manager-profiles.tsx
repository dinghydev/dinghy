import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRAFFIC_MANAGER_PROFILES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Traffic_Manager.svg;',
  _width: 50,
  _height: 50,
}

export function TrafficManagerProfiles(props: DiagramNodeProps) {
  return <Shape {...TRAFFIC_MANAGER_PROFILES} {...props} />
}
