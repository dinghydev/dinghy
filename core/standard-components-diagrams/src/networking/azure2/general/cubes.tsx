import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CUBES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Cubes.svg;strokeColor=none;',
  _width: 67,
  _height: 68,
}

export function Cubes(props: DiagramNodeProps) {
  return <Shape {...CUBES} {...props} />
}
