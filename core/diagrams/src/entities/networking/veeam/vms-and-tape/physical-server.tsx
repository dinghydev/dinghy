import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PHYSICAL_SERVER = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.esx_esxi;',
  },
  _width: 33.2,
  _height: 50.8,
}

export function PhysicalServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...PHYSICAL_SERVER}
      {...props}
      _style={extendStyle(PHYSICAL_SERVER, props)}
    />
  )
}
