import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHANGEOVER_CONTACT_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.changeoverContactSwitch2;elSwitchState=2;',
  _width: 75,
  _height: 20,
}

export function ChangeoverContact2(props: DiagramNodeProps) {
  return <Shape {...CHANGEOVER_CONTACT_2} {...props} />
}
