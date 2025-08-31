import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_4_POSITION_SWITCH_4 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.fourPositionSwitch2;elSwitchState=4;',
  },
  _width: 75,
  _height: 70,
}

export function Component4PositionSwitch4(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_4_POSITION_SWITCH_4}
      {...props}
      _style={extendStyle(COMPONENT_4_POSITION_SWITCH_4, props)}
    />
  )
}
