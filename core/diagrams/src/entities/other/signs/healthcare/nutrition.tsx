import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NUTRITION = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.nutrition;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 99,
}

export function Nutrition(props: NodeProps) {
  return (
    <Shape {...NUTRITION} {...props} _style={extendStyle(NUTRITION, props)} />
  )
}
