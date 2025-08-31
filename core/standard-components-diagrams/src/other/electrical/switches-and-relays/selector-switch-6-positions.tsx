import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SELECTOR_SWITCH_6_POSITIONS = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.selectorSwitch6Position2;elSwitchState=1;',
  },
  _width: 75,
  _height: 106,
}

export function SelectorSwitch6Positions(props: DiagramNodeProps) {
  return (
    <Shape
      {...SELECTOR_SWITCH_6_POSITIONS}
      {...props}
      _style={extendStyle(SELECTOR_SWITCH_6_POSITIONS, props)}
    />
  )
}
