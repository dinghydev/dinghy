import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CITRIX_PROVISIONING_SERVER = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_provisioning_server;',
  },
  _width: 50,
  _height: 32.235,
}

export function CitrixProvisioningServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...CITRIX_PROVISIONING_SERVER}
      {...props}
      _style={extendStyle(CITRIX_PROVISIONING_SERVER, props)}
    />
  )
}
