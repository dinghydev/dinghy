import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RESOURCE_GRAPH_EXPLORER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Resource_Graph_Explorer.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 64,
}

export function ResourceGraphExplorer(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, RESOURCE_GRAPH_EXPLORER)} />
  )
}
