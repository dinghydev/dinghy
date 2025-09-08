import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRANSFORMER_IRON_CORE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.transformer_1;',
  },
  _original_width: 64,
  _original_height: 60,
}

export function TransformerIronCore(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRANSFORMER_IRON_CORE}
      {...props}
      _style={extendStyle(TRANSFORMER_IRON_CORE, props)}
    />
  )
}
