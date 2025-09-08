import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HORIZONTAL_TREE_LAYOUT = {
  _style: {
    entity:
      'swimlane;startSize=20;horizontal=0;childLayout=treeLayout;horizontalTree=1;sortEdges=1;resizable=0;containerType=tree;fontSize=12;',
  },
  _original_width: 310,
  _original_height: 160,
}

export function HorizontalTreeLayout(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_TREE_LAYOUT}
      {...props}
      _style={extendStyle(HORIZONTAL_TREE_LAYOUT, props)}
    />
  )
}
