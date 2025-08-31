import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANUAL_SWITCH_ON = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.manualSwitch2;elSwitchState=on;',
  _width: 75,
  _height: 18,
}

export function ManualSwitchOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANUAL_SWITCH_ON}
      {...props}
      _style={extendStyle(MANUAL_SWITCH_ON, props)}
    />
  )
}
