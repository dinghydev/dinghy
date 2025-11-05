import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORKSPACE_GATEWAY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Workspace_Gateway.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 56.68,
}

export function WorkspaceGateway(props: NodeProps) {
  return (
    <Shape
      {...WORKSPACE_GATEWAY}
      {...props}
      _style={extendStyle(WORKSPACE_GATEWAY, props)}
    />
  )
}
