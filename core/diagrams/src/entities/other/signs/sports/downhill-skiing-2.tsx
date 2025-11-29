import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOWNHILL_SKIING_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.downhill_skiing_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 84,
}

export function DownhillSkiing2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOWNHILL_SKIING_2)} />
}
