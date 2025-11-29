import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERTICAL_TREE_LAYOUT = {
  _style: {
    entity:
      'swimlane;startSize=20;horizontal=1;childLayout=treeLayout;horizontalTree=0;sortEdges=1;resizable=0;containerType=tree;fontSize=12;',
  },
  _width: 280,
  _height: 190,
}

export function VerticalTreeLayout(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VERTICAL_TREE_LAYOUT)} />
}
