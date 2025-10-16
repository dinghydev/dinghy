import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HOST_GROUPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Host_Groups.svg;strokeColor=none;',
  },
  _original_width: 62,
  _original_height: 68,
}

export function HostGroups(props: DiagramNodeProps) {
  return (
    <Shape
      {...HOST_GROUPS}
      {...props}
      _style={extendStyle(HOST_GROUPS, props)}
    />
  )
}
