import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUG = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Bug.svg;strokeColor=none;',
  _width: 59,
  _height: 64,
}

export function Bug(props: DiagramNodeProps) {
  return <Shape {...BUG} {...props} />
}
