import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORKSPACES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Workspaces2.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Workspaces(props: NodeProps) {
  return (
    <Shape {...WORKSPACES} {...props} _style={extendStyle(WORKSPACES, props)} />
  )
}
