import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROVISIONING_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.provisioning_server;',
  },
  _original_width: 76,
  _original_height: 87,
}

export function ProvisioningServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROVISIONING_SERVER}
      {...props}
      _style={extendStyle(PROVISIONING_SERVER, props)}
    />
  )
}
