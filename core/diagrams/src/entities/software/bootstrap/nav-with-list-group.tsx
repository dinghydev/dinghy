import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NAV_WITH_LIST_GROUP = {
  _style: {
    entity:
      'swimlane;shape=mxgraph.bootstrap.anchor;strokeColor=#DFDFDF;fillColor=#FFFFFF;fontColor=#000000;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=0;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 160,
}

export function NavWithListGroup(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NAV_WITH_LIST_GROUP)} />
}
