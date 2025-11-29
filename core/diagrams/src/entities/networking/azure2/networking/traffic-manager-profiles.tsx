import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRAFFIC_MANAGER_PROFILES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Traffic_Manager_Profiles.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function TrafficManagerProfiles(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, TRAFFIC_MANAGER_PROFILES)} />
  )
}
