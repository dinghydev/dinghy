import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CODE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Code.svg;strokeColor=none;',
  _width: 64,
  _height: 52,
}

export function Code(props: DiagramNodeProps) {
  return <Shape {...CODE} {...props} />
}
