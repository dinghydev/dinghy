import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BRANCH = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Branch.svg;strokeColor=none;',
  _width: 72,
  _height: 72,
}

export function Branch(props: DiagramNodeProps) {
  return <Shape {...BRANCH} {...props} />
}
