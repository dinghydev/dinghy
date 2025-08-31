import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MENU = {
  _style:
    'swimlane;shape=rect;strokeColor=#EEEEEE;fillColor=#ffffff;fontColor=#000000;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=0;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;shadow=1;',
  _width: 0,
  _height: 168,
}

export function Menu(props: DiagramNodeProps) {
  return <Shape {...MENU} {...props} _style={extendStyle(MENU, props)} />
}
