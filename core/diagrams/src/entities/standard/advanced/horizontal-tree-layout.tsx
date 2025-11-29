import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HORIZONTAL_TREE_LAYOUT = {
  _style: {
    entity:
      'swimlane;startSize=20;horizontal=0;childLayout=treeLayout;horizontalTree=1;sortEdges=1;resizable=0;containerType=tree;fontSize=12;',
  },
  _width: 310,
  _height: 160,
}

export function HorizontalTreeLayout(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, HORIZONTAL_TREE_LAYOUT)} />
  )
}
