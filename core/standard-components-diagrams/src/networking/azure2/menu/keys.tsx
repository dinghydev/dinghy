import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KEYS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/menu/Keys.svg;',
  _width: 64,
  _height: 68,
}

export function Keys(props: DiagramNodeProps) {
  return <Shape {...KEYS} {...props} />
}
