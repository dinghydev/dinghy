import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ORBITAL = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Orbital.svg;',
  _width: 68,
  _height: 68,
}

export function Orbital(props: DiagramNodeProps) {
  return <Shape {...ORBITAL} {...props} />
}
