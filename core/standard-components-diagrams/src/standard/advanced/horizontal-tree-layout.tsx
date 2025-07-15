import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HORIZONTAL_TREE_LAYOUT = {
  _style:
    'swimlane;startSize=20;horizontal=0;childLayout=treeLayout;horizontalTree=1;sortEdges=1;resizable=0;containerType=tree;fontSize=12;',
  _width: 310,
  _height: 160,
}

export function HorizontalTreeLayout(props: DiagramNodeProps) {
  return <Shape {...HORIZONTAL_TREE_LAYOUT} {...props} />
}
