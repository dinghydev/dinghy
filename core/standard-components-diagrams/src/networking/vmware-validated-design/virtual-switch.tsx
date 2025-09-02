import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_SWITCH = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.virtual_switch;',
  },
  _original_width: 50,
  _original_height: 26.5,
}

export function VirtualSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_SWITCH}
      {...props}
      _style={extendStyle(VIRTUAL_SWITCH, props)}
    />
  )
}
