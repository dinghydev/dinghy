import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_4_POSITION_SWITCH_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.fourPositionSwitch2;elSwitchState=2;',
  },
  _original_width: 75,
  _original_height: 70,
}

export function Component4PositionSwitch2(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, COMPONENT_4_POSITION_SWITCH_2)}
    />
  )
}
