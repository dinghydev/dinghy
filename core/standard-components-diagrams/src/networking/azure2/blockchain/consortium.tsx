import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONSORTIUM = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/blockchain/Consortium.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function Consortium(props: DiagramNodeProps) {
  return <Shape {...CONSORTIUM} {...props} />
}
