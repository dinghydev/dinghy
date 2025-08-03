import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STACKOVERFLOW = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/StackOverflow.svg;strokeColor=none;',
  _width: 40,
  _height: 50,
}

export function Stackoverflow(props: DiagramNodeProps) {
  return <Shape {...STACKOVERFLOW} {...props} />
}
