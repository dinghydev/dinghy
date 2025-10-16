import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const USER_RESOURCE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/User_Resource.svg;strokeColor=none;',
  },
  _original_width: 48,
  _original_height: 50,
}

export function UserResource(props: DiagramNodeProps) {
  return (
    <Shape
      {...USER_RESOURCE}
      {...props}
      _style={extendStyle(USER_RESOURCE, props)}
    />
  )
}
