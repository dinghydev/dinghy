import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SELECTOR_SWITCH_3_POSITIONS = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.selectorSwitch3Position2;elSwitchState=1;',
  },
  _original_width: 75,
  _original_height: 46,
}

export function SelectorSwitch3Positions(props: DiagramNodeProps) {
  return (
    <Shape
      {...SELECTOR_SWITCH_3_POSITIONS}
      {...props}
      _style={extendStyle(SELECTOR_SWITCH_3_POSITIONS, props)}
    />
  )
}
