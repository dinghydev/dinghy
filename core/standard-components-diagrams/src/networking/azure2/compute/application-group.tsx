import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_GROUP = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Application_Group.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
