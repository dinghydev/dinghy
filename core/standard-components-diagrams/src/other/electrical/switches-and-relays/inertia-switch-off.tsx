import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INERTIA_SWITCH_OFF = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.inertiaSwitch2;elSwitchState=off;',
  },
  _original_width: 75,
  _original_height: 19,
}

export function InertiaSwitchOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...INERTIA_SWITCH_OFF}
      {...props}
      _style={extendStyle(INERTIA_SWITCH_OFF, props)}
    />
  )
}
