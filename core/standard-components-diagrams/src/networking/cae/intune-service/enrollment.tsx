import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENROLLMENT = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Enrollment.svg;',
  _width: 50,
  _height: 50,
}

export function Enrollment(props: DiagramNodeProps) {
  return <Shape {...ENROLLMENT} {...props} />
}
