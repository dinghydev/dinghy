import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKSPACE_GATEWAY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Workspace_Gateway.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 56.68,
}

export function WorkspaceGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...WORKSPACE_GATEWAY}
      {...props}
      _style={extendStyle(WORKSPACE_GATEWAY, props)}
    />
  )
}
