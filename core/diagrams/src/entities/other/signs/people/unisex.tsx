import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const UNISEX = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.unisex;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 93,
}

export function Unisex(props: NodeProps) {
  return <Shape {...UNISEX} {...props} _style={extendStyle(UNISEX, props)} />
}
