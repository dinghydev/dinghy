import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TEMPLATES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Templates.svg;strokeColor=none;',
  _width: 56.00000000000001,
  _height: 68,
}

export function Templates(props: DiagramNodeProps) {
  return <Shape {...TEMPLATES} {...props} />
}
