import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REFRIGERATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.refrigerator;',
  },
  _original_width: 60,
  _original_height: 62,
}

export function Refrigerator(props: NodeProps) {
  return (
    <Shape
      {...REFRIGERATOR}
      {...props}
      _style={extendStyle(REFRIGERATOR, props)}
    />
  )
}
