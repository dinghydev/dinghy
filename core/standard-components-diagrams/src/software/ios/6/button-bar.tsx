import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_BAR = {
  _style: {
    entity:
      'swimlane;shape=mxgraph.bootstrap.anchor;strokeColor=#C4C4C4;fillColor=#ffffff;fontColor=#666666;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=0;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 50,
}

export function ButtonBar(props: DiagramNodeProps) {
  return (
    <Shape {...BUTTON_BAR} {...props} _style={extendStyle(BUTTON_BAR, props)} />
  )
}
