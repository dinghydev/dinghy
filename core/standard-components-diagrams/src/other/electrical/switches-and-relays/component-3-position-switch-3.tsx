import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_3_POSITION_SWITCH_3 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.threePositionSwitch2;elSwitchState=3;',
  },
  _width: 60,
  _height: 60,
}

export function Component3PositionSwitch3(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_3_POSITION_SWITCH_3}
      {...props}
      _style={extendStyle(COMPONENT_3_POSITION_SWITCH_3, props)}
    />
  )
}
