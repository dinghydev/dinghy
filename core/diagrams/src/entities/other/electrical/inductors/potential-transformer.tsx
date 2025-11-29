import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POTENTIAL_TRANSFORMER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.potential_transformer_2;',
  },
  _width: 92,
  _height: 40,
}

export function PotentialTransformer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, POTENTIAL_TRANSFORMER)} />
}
