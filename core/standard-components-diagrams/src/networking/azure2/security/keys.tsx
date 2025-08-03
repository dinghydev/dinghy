import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KEYS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Keys.svg;strokeColor=none;',
  _width: 72,
  _height: 76,
}

export function Keys(props: DiagramNodeProps) {
  return <Shape {...KEYS} {...props} />
}
