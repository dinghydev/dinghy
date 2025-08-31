import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WIRELESS_CONNECTION = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.wireless_connection',
  },
  _width: 42,
  _height: 50,
}

export function WirelessConnection(props: DiagramNodeProps) {
  return (
    <Shape
      {...WIRELESS_CONNECTION}
      {...props}
      _style={extendStyle(WIRELESS_CONNECTION, props)}
    />
  )
}
