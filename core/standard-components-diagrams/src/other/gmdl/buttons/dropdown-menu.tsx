import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DROPDOWN_MENU = {
  _style:
    'swimlane;shape=rect;strokeColor=#eeeeee;fillColor=#ffffff;fontColor=#000000;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=0;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;shadow=1;',
  _width: 0,
  _height: 180,
}

export function DropdownMenu(props: DiagramNodeProps) {
  return <Shape {...DROPDOWN_MENU} {...props} />
}
