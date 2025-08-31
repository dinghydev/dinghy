import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOFTWARE_BASED_SERVER = {
  _style:
    'shape=mxgraph.cisco.servers.software_based_server;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 67,
  _height: 77,
}

export function SoftwareBasedServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...SOFTWARE_BASED_SERVER}
      {...props}
      _style={extendStyle(SOFTWARE_BASED_SERVER, props)}
    />
  )
}
