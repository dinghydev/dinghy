import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE_BUS = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.service_bus;pointerEvents=1;',
  _width: 45,
  _height: 50,
}

export function ServiceBus(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVICE_BUS}
      {...props}
      _style={extendStyle(SERVICE_BUS, props)}
    />
  )
}
