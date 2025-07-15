import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TWO_WAY_CONTACT = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.twoWayContact2;elSwitchState=neutral;',
  _width: 75,
  _height: 30,
}

export function TwoWayContact(props: DiagramNodeProps) {
  return <Shape {...TWO_WAY_CONTACT} {...props} />
}
