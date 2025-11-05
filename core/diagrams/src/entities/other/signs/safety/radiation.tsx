import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RADIATION = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.radiation;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 102,
  _height: 94,
}

export function Radiation(props: NodeProps) {
  return (
    <Shape {...RADIATION} {...props} _style={extendStyle(RADIATION, props)} />
  )
}
