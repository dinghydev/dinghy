import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_2_POSITION_SWITCH = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.twoPositionSwitch2;elSwitchState=1;',
  },
  _width: 75,
  _height: 70,
}

export function Component2PositionSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_2_POSITION_SWITCH}
      {...props}
      _style={extendStyle(COMPONENT_2_POSITION_SWITCH, props)}
    />
  )
}
