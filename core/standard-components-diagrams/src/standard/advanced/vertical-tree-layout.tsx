import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VERTICAL_TREE_LAYOUT = {
  _style:
    'swimlane;startSize=20;horizontal=1;childLayout=treeLayout;horizontalTree=0;sortEdges=1;resizable=0;containerType=tree;fontSize=12;',
  _width: 280,
  _height: 190,
}

export function VerticalTreeLayout(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_TREE_LAYOUT}
      {...props}
      _style={extendStyle(VERTICAL_TREE_LAYOUT, props)}
    />
  )
}
