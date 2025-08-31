import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FREE_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Free_Services.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 63,
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
