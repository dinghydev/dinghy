import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_4_POSITION_SWITCH_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.fourPositionSwitch2;elSwitchState=2;',
  _width: 75,
  _height: 70,
}

export function Component4PositionSwitch2(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_4_POSITION_SWITCH_2}
      {...props}
      _style={extendStyle(COMPONENT_4_POSITION_SWITCH_2, props)}
    />
  )
}
