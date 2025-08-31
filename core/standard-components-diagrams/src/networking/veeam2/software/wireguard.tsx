import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WIREGUARD = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.wireguard;',
  _width: 34,
  _height: 34,
}

export function Wireguard(props: DiagramNodeProps) {
  return (
    <Shape {...WIREGUARD} {...props} _style={extendStyle(WIREGUARD, props)} />
  )
}
