import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PUSHBUTTON_OFF = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.pushbutton;aspect=fixed;elSwitchState=off;',
  _width: 75,
  _height: 20,
}

export function PushbuttonOff(props: DiagramNodeProps) {
  return <Shape {...PUSHBUTTON_OFF} {...props} />
}
