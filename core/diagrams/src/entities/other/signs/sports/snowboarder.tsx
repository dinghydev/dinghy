import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SNOWBOARDER = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.snowboarder;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 99,
}

export function Snowboarder(props: NodeProps) {
  return (
    <Shape
      {...SNOWBOARDER}
      {...props}
      _style={extendStyle(SNOWBOARDER, props)}
    />
  )
}
