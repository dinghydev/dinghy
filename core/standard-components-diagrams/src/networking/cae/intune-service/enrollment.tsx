import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENROLLMENT = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Enrollment.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Enrollment(props: DiagramNodeProps) {
  return (
    <Shape {...ENROLLMENT} {...props} _style={extendStyle(ENROLLMENT, props)} />
  )
}
