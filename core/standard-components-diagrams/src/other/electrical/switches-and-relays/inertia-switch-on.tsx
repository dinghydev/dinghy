import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INERTIA_SWITCH_ON = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.inertiaSwitch2;elSwitchState=on;',
  _width: 75,
  _height: 19,
}

export function InertiaSwitchOn(props: DiagramNodeProps) {
  return <Shape {...INERTIA_SWITCH_ON} {...props} />
}
