import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_3_POSITION_SWITCH = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.threePositionSwitch2;elSwitchState=1;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Component3PositionSwitch(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, COMPONENT_3_POSITION_SWITCH)}
    />
  )
}
