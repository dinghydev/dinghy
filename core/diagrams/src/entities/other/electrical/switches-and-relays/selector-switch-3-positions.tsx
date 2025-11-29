import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SELECTOR_SWITCH_3_POSITIONS = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.selectorSwitch3Position2;elSwitchState=1;',
  },
  _width: 75,
  _height: 46,
}

export function SelectorSwitch3Positions(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, SELECTOR_SWITCH_3_POSITIONS)}
    />
  )
}
