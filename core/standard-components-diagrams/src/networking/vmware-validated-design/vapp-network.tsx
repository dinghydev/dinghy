import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VAPP_NETWORK = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.vapp_network;',
  _width: 50,
  _height: 42.5,
}

export function VappNetwork(props: DiagramNodeProps) {
  return (
    <Shape
      {...VAPP_NETWORK}
      {...props}
      _style={extendStyle(VAPP_NETWORK, props)}
    />
  )
}
