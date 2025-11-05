import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NEUROLOGY = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.neurology;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 84,
  _original_height: 98,
}

export function Neurology(props: NodeProps) {
  return (
    <Shape {...NEUROLOGY} {...props} _style={extendStyle(NEUROLOGY, props)} />
  )
}
