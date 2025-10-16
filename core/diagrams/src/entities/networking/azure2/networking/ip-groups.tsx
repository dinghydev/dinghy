import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IP_GROUPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/IP_Groups.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 52,
}

export function IpGroups(props: DiagramNodeProps) {
  return (
    <Shape {...IP_GROUPS} {...props} _style={extendStyle(IP_GROUPS, props)} />
  )
}
