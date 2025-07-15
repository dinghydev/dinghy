import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTUNE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Intune.svg;',
  _width: 68,
  _height: 62,
}

export function Intune(props: DiagramNodeProps) {
  return <Shape {...INTUNE} {...props} />
}
