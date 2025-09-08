import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NAV_WITH_LIST_GROUP = {
  _style: {
    entity:
      'swimlane;shape=mxgraph.bootstrap.anchor;strokeColor=#DFDFDF;fillColor=#FFFFFF;fontColor=#000000;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=0;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  },
  _original_width: 0,
  _original_height: 160,
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
