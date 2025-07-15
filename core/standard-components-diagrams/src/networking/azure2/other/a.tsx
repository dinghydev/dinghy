import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const A_CONST = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_A.svg;',
  _width: 68,
  _height: 64.12,
}

export function A(props: DiagramNodeProps) {
  return <Shape {...A_CONST} {...props} />
}
