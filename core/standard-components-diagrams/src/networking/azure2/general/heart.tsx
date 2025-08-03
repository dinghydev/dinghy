import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HEART = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Heart.svg;strokeColor=none;',
  _width: 64,
  _height: 60,
}

export function Heart(props: DiagramNodeProps) {
  return <Shape {...HEART} {...props} />
}
