import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ISOLATOR_OFF = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.isolatorSwitch2;elSwitchState=off;',
  _width: 75,
  _height: 20,
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
