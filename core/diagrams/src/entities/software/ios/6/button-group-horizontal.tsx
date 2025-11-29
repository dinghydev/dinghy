import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_GROUP_HORIZONTAL = {
  _style: {
    entity:
      'swimlane;shape=mxgraph.bootstrap.anchor;strokeColor=#444444;fillColor=#ffffff;fontColor=#999999;fontStyle=0;childLayout=stackLayout;horizontal=0;startSize=0;horizontalStack=1;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 12.5,
}

export function ButtonGroupHorizontal(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, BUTTON_GROUP_HORIZONTAL)} />
  )
}
