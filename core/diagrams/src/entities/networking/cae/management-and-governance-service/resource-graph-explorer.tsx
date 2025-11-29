import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RESOURCE_GRAPH_EXPLORER = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Resource_Graph_Explorer.svg;strokeColor=none;',
  },
  _original_width: 49,
  _original_height: 50,
}

export function ResourceGraphExplorer(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, RESOURCE_GRAPH_EXPLORER)} />
  )
}
