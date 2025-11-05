import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENETICS = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.genetics;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 99,
}

export function Genetics(props: NodeProps) {
  return (
    <Shape {...GENETICS} {...props} _style={extendStyle(GENETICS, props)} />
  )
}
