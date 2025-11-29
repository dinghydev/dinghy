import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRANSFORMER_IRON_CORE_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.transformer_2;',
  },
  _original_width: 64,
  _original_height: 60,
}

export function TransformerIronCore2(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, TRANSFORMER_IRON_CORE_2)} />
  )
}
