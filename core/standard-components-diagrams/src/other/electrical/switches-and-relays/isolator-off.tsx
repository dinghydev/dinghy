import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ISOLATOR_OFF = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.isolatorSwitch2;elSwitchState=off;',
  },
  _original_width: 75,
  _original_height: 20,
}

export function IsolatorOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...ISOLATOR_OFF}
      {...props}
      _style={extendStyle(ISOLATOR_OFF, props)}
    />
  )
}
