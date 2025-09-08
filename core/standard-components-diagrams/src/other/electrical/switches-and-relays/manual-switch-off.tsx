import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MANUAL_SWITCH_OFF = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.manualSwitch2;elSwitchState=off;',
  },
  _original_width: 75,
  _original_height: 18,
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
