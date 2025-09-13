import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CELL_LIST = {
  _style: {
    entity:
      'swimlane;shape=mxgraph.bootstrap.anchor;strokeColor=none;fillColor=#ffffff;fontColor=#000000;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=0;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 120,
}

export function CellList(props: DiagramNodeProps) {
  return (
    <Shape {...CELL_LIST} {...props} _style={extendStyle(CELL_LIST, props)} />
  )
}
