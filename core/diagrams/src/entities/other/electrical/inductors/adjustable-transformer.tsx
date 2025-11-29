import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ADJUSTABLE_TRANSFORMER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.adjustable_transformer;',
  },
  _original_width: 46,
  _original_height: 60,
}

export function AdjustableTransformer(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, ADJUSTABLE_TRANSFORMER)} />
  )
}
