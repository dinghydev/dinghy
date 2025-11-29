import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCENIC_VIEWPOINT = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.scenic_viewpoint;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 80,
  _original_height: 99,
}

export function ScenicViewpoint(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SCENIC_VIEWPOINT)} />
}
