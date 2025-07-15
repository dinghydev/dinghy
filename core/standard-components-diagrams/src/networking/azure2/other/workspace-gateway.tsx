import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORKSPACE_GATEWAY = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Workspace_Gateway.svg;',
  _width: 68,
  _height: 56.68,
}

export function WorkspaceGateway(props: DiagramNodeProps) {
  return <Shape {...WORKSPACE_GATEWAY} {...props} />
}
