import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FRAGILE = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.fragile;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 73,
  _height: 99,
}

export function Fragile(props: NodeProps) {
  return <Shape {...FRAGILE} {...props} _style={extendStyle(FRAGILE, props)} />
}
