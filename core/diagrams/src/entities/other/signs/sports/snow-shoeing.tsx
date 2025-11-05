import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SNOW_SHOEING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.snow_shoeing;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 84,
  _original_height: 99,
}

export function SnowShoeing(props: NodeProps) {
  return (
    <Shape
      {...SNOW_SHOEING}
      {...props}
      _style={extendStyle(SNOW_SHOEING, props)}
    />
  )
}
