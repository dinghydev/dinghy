import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INERTIA_SWITCH_ON = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.inertiaSwitch2;elSwitchState=on;',
  },
  _width: 75,
  _height: 19,
}

export function InertiaSwitchOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...INERTIA_SWITCH_ON}
      {...props}
      _style={extendStyle(INERTIA_SWITCH_ON, props)}
    />
  )
}
