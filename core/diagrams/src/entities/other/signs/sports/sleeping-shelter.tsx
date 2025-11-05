import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SLEEPING_SHELTER = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.sleeping_shelter;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 90,
}

export function SleepingShelter(props: NodeProps) {
  return (
    <Shape
      {...SLEEPING_SHELTER}
      {...props}
      _style={extendStyle(SLEEPING_SHELTER, props)}
    />
  )
}
