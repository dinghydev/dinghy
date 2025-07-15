import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PUSHBUTTON_ON = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.pushbutton;aspect=fixed;elSwitchState=on;',
  _width: 75,
  _height: 20,
}

export function PushbuttonOn(props: DiagramNodeProps) {
  return <Shape {...PUSHBUTTON_ON} {...props} />
}
