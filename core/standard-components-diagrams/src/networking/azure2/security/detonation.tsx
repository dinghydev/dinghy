import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DETONATION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Detonation.svg;',
  _width: 66,
  _height: 68,
}

export function Detonation(props: DiagramNodeProps) {
  return <Shape {...DETONATION} {...props} />
}
