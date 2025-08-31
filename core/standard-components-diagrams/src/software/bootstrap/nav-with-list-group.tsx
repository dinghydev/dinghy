import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NAV_WITH_LIST_GROUP = {
  _style:
    'swimlane;shape=mxgraph.bootstrap.anchor;strokeColor=#DFDFDF;fillColor=#FFFFFF;fontColor=#000000;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=0;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 160,
}

export function NavWithListGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...NAV_WITH_LIST_GROUP}
      {...props}
      _style={extendStyle(NAV_WITH_LIST_GROUP, props)}
    />
  )
}
