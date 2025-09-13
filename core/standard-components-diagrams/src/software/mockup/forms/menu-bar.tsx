import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MENU_BAR = {
  _style: {
    entity:
      'swimlane;shape=mxgraph.bootstrap.anchor;strokeColor=#999999;fillColor=#ffffff;fontColor=#666666;childLayout=stackLayout;horizontal=0;startSize=0;horizontalStack=1;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 30,
}

export function MenuBar(props: DiagramNodeProps) {
  return (
    <Shape {...MENU_BAR} {...props} _style={extendStyle(MENU_BAR, props)} />
  )
}
