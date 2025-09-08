import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FREE_SERVICES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Free_Services.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 46,
}

export function FreeServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...FREE_SERVICES}
      {...props}
      _style={extendStyle(FREE_SERVICES, props)}
    />
  )
}
