import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SURFING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.surfing;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 96,
  _original_height: 99,
}

export function Surfing(props: NodeProps) {
  return <Shape {...SURFING} {...props} _style={extendStyle(SURFING, props)} />
}
