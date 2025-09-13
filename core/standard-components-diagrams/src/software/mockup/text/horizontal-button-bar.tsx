import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HORIZONTAL_BUTTON_BAR = {
  _style: {
    entity:
      'swimlane;shape=mxgraph.bootstrap.anchor;strokeColor=#666666;fillColor=#ffffff;fontColor=#0000FF;fontStyle=0;childLayout=stackLayout;horizontal=0;startSize=0;horizontalStack=1;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 25,
}

export function HorizontalButtonBar(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_BUTTON_BAR}
      {...props}
      _style={extendStyle(HORIZONTAL_BUTTON_BAR, props)}
    />
  )
}
