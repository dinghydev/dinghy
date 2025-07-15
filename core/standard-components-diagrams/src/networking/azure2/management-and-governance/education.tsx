import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EDUCATION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Education.svg;',
  _width: 67,
  _height: 52,
}

export function Education(props: DiagramNodeProps) {
  return <Shape {...EDUCATION} {...props} />
}
