import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RETURN_TO_SCHOOL = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/ReturnToSchool.svg;strokeColor=none;',
  _width: 68,
  _height: 66.60000000000001,
}

export function ReturnToSchool(props: DiagramNodeProps) {
  return <Shape {...RETURN_TO_SCHOOL} {...props} />
}
