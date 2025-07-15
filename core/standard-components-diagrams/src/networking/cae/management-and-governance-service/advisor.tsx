import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ADVISOR = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Advisor.svg;',
  _width: 50,
  _height: 50,
}

export function Advisor(props: DiagramNodeProps) {
  return <Shape {...ADVISOR} {...props} />
}
