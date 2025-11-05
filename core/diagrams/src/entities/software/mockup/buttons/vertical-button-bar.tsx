import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERTICAL_BUTTON_BAR = {
  _style: {
    entity:
      'swimlane;shape=mxgraph.bootstrap.anchor;strokeColor=#666666;fillColor=#ffffff;fontColor=#666666;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=0;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 200,
}

export function VerticalButtonBar(props: NodeProps) {
  return (
    <Shape
      {...VERTICAL_BUTTON_BAR}
      {...props}
      _style={extendStyle(VERTICAL_BUTTON_BAR, props)}
    />
  )
}
