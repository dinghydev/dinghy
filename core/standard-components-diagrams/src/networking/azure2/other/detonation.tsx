import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DETONATION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Detonation.svg;strokeColor=none;',
  _width: 62,
  _height: 64,
}

export function Detonation(props: DiagramNodeProps) {
  return <Shape {...DETONATION} {...props} />
}
