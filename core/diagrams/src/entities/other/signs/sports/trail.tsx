import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRAIL = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.trail;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 99,
}

export function Trail(props: NodeProps) {
  return <Shape {...TRAIL} {...props} _style={extendStyle(TRAIL, props)} />
}
