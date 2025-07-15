import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FREE_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Free_Services.svg;',
  _width: 68,
  _height: 63,
}

export function FreeServices(props: DiagramNodeProps) {
  return <Shape {...FREE_SERVICES} {...props} />
}
