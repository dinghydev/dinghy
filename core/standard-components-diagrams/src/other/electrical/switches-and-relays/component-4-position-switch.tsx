import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT_4_POSITION_SWITCH = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.fourPositionSwitch2;elSwitchState=1;',
  },
  _original_width: 75,
  _original_height: 70,
}

export function Component4PositionSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_4_POSITION_SWITCH}
      {...props}
      _style={extendStyle(COMPONENT_4_POSITION_SWITCH, props)}
    />
  )
}
