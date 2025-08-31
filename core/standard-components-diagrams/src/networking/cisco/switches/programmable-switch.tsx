import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROGRAMMABLE_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.programmable_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 54,
  _height: 56,
}

export function ProgrammableSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROGRAMMABLE_SWITCH}
      {...props}
      _style={extendStyle(PROGRAMMABLE_SWITCH, props)}
    />
  )
}
