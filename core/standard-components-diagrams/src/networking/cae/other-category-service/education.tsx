import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EDUCATION = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Education.svg;',
  _width: 50,
  _height: 39,
}

export function Education(props: DiagramNodeProps) {
  return <Shape {...EDUCATION} {...props} />
}
