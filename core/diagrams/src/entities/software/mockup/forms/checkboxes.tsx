import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHECKBOXES = {
  _style: {
    entity:
      'swimlane;strokeColor=#999999;swimlaneFillColor=#FFFFFF;fillColor=#ffffff;fontColor=#666666;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=0;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 120,
}

export function Checkboxes(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHECKBOXES)} />
}
