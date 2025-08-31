import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PHYSICAL_SWITCH = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.physical_switch;',
  },
  _width: 53,
  _height: 15,
}

export function PhysicalSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...PHYSICAL_SWITCH}
      {...props}
      _style={extendStyle(PHYSICAL_SWITCH, props)}
    />
  )
}
