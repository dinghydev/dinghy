import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POTENTIAL_TRANSFORMER_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.potential_transformer;',
  },
  _width: 100,
  _height: 50,
}

export function PotentialTransformer2(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, POTENTIAL_TRANSFORMER_2)} />
  )
}
