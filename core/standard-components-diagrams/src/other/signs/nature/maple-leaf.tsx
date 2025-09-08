import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MAPLE_LEAF = {
  _style: {
    entity:
      'shape=mxgraph.signs.nature.maple_leaf;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 88,
  _original_height: 98,
}

export function MapleLeaf(props: DiagramNodeProps) {
  return (
    <Shape {...MAPLE_LEAF} {...props} _style={extendStyle(MAPLE_LEAF, props)} />
  )
}
