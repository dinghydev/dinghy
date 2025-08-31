import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SELECTOR_SWITCH_4_POSITIONS = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.selectorSwitch4Position2;elSwitchState=1;',
  _width: 75,
  _height: 66,
}

export function SelectorSwitch4Positions(props: DiagramNodeProps) {
  return (
    <Shape
      {...SELECTOR_SWITCH_4_POSITIONS}
      {...props}
      _style={extendStyle(SELECTOR_SWITCH_4_POSITIONS, props)}
    />
  )
}
