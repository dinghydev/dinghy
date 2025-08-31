import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANUAL_SWITCH_OFF = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.manualSwitch2;elSwitchState=off;',
  _width: 75,
  _height: 18,
}

export function ManualSwitchOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANUAL_SWITCH_OFF}
      {...props}
      _style={extendStyle(MANUAL_SWITCH_OFF, props)}
    />
  )
}
