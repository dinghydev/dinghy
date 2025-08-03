import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MINDARO = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Mindaro.svg;strokeColor=none;',
  _width: 67.2,
  _height: 68,
}

export function Mindaro(props: DiagramNodeProps) {
  return <Shape {...MINDARO} {...props} />
}
