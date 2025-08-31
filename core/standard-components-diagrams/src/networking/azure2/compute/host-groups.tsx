import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOST_GROUPS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Host_Groups.svg;strokeColor=none;',
  _width: 62,
  _height: 68,
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
