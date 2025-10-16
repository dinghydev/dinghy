import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APPLICATION_GROUP = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Application_Group.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function ApplicationGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_GROUP}
      {...props}
      _style={extendStyle(APPLICATION_GROUP, props)}
    />
  )
}
