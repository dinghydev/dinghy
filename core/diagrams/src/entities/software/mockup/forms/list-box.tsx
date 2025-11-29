import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIST_BOX = {
  _style: {
    entity:
      'swimlane;strokeColor=#999999;swimlaneFillColor=#FFFFFF;fillColor=#ffffff;fontColor=#008CFF;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;fontSize=17;',
  },
  _width: 0,
  _height: 120,
}

export function ListBox(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LIST_BOX)} />
}
