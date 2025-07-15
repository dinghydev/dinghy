import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARC = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Azure_Arc.svg;',
  _width: 69,
  _height: 52,
}

export function Arc(props: DiagramNodeProps) {
  return <Shape {...ARC} {...props} />
}
