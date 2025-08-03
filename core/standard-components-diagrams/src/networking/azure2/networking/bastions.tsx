import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BASTIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Bastions.svg;strokeColor=none;',
  _width: 57.99999999999999,
  _height: 68,
}

export function Bastions(props: DiagramNodeProps) {
  return <Shape {...BASTIONS} {...props} />
}
