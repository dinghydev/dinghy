import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FERRITE_CORE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.ferrite_core;',
  },
  _width: 64,
  _height: 4,
}

export function FerriteCore(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FERRITE_CORE)} />
}
