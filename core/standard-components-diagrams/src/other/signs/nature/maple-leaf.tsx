import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAPLE_LEAF = {
  _style: {
    entity:
      'shape=mxgraph.signs.nature.maple_leaf;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 88,
  _height: 98,
}

export function MapleLeaf(props: DiagramNodeProps) {
  return (
    <Shape {...MAPLE_LEAF} {...props} _style={extendStyle(MAPLE_LEAF, props)} />
  )
}
