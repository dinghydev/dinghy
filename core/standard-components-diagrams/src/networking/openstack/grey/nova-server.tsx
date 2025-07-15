import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NOVA_SERVER = {
  _style:
    'fillColor=#808080;aspect=fixed;sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.openstack.nova_server;',
  _width: 50,
  _height: 50,
}

export function NovaServer(props: DiagramNodeProps) {
  return <Shape {...NOVA_SERVER} {...props} />
}
