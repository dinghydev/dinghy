import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ON_PREMISES_SERVER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.on_premises_server;',
  _width: 44,
  _height: 58,
}

export function OnPremisesServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...ON_PREMISES_SERVER}
      {...props}
      _style={extendStyle(ON_PREMISES_SERVER, props)}
    />
  )
}
