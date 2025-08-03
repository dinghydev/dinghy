import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTUNE_FOR_EDUCATION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Intune_For_Education.svg;strokeColor=none;',
  _width: 68,
  _height: 62,
}

export function IntuneForEducation(props: DiagramNodeProps) {
  return <Shape {...INTUNE_FOR_EDUCATION} {...props} />
}
