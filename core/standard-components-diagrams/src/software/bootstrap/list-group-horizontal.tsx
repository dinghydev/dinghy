import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIST_GROUP_HORIZONTAL = {
  _style:
    'swimlane;shape=mxgraph.bootstrap.anchor;strokeColor=#DFDFDF;fillColor=#ffffff;fontColor=#212529;fontStyle=0;childLayout=stackLayout;horizontal=0;startSize=0;horizontalStack=1;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 30,
}

export function ListGroupHorizontal(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIST_GROUP_HORIZONTAL}
      {...props}
      _style={extendStyle(LIST_GROUP_HORIZONTAL, props)}
    />
  )
}
