import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TEMPLATES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Templates.svg;',
  _width: 44,
  _height: 50,
}

export function Templates(props: DiagramNodeProps) {
  return <Shape {...TEMPLATES} {...props} />
}
