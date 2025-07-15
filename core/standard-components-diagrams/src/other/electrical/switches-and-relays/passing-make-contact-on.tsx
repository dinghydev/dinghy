import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PASSING_MAKE_CONTACT_ON = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.passingMakeContact2;elSwitchState=on;',
  _width: 75,
  _height: 23,
}

export function PassingMakeContactOn(props: DiagramNodeProps) {
  return <Shape {...PASSING_MAKE_CONTACT_ON} {...props} />
}
