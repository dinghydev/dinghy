import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETWORK_SWITCH = {
  _style:
    'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.switch;',
  _width: 64,
  _height: 10.8,
}

export function NetworkSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETWORK_SWITCH}
      {...props}
      _style={extendStyle(NETWORK_SWITCH, props)}
    />
  )
}
