import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EDGE_MANAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Edge_Management.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 68,
}

export function EdgeManagement(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EDGE_MANAGEMENT)} />
}
