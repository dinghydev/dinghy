import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROVISIONING_SERVER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.provisioning_server;',
  _width: 76,
  _height: 87,
}

export function ProvisioningServer(props: DiagramNodeProps) {
  return <Shape {...PROVISIONING_SERVER} {...props} />
}
