import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FREE_SERVICES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Free_Services.svg;strokeColor=none;',
  _width: 50,
  _height: 46,
}

export function FreeServices(props: DiagramNodeProps) {
  return <Shape {...FREE_SERVICES} {...props} />
}
