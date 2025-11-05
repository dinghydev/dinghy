import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AMPHITEATER = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.amphiteater;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 95,
  _original_height: 99,
}

export function Amphiteater(props: NodeProps) {
  return (
    <Shape
      {...AMPHITEATER}
      {...props}
      _style={extendStyle(AMPHITEATER, props)}
    />
  )
}
