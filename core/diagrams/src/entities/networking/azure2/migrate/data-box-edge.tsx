import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_BOX_EDGE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/migrate/Data_Box_Edge.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 48,
}

export function DataBoxEdge(props: NodeProps) {
  return (
    <Shape
      {...DATA_BOX_EDGE}
      {...props}
      _style={extendStyle(DATA_BOX_EDGE, props)}
    />
  )
}
