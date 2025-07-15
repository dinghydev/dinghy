import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUCCESS_3 = {
  _style:
    'endArrow=none;html=1;strokeColor=#188918;bendable=1;rounded=0;endFill=0;endSize=4;strokeWidth=1.5;startSize=4;startArrow=none;startFill=0;',
  _width: 120,
  _height: 0,
}

export function Success3(props: DiagramNodeProps) {
  return <Shape {...SUCCESS_3} {...props} />
}
