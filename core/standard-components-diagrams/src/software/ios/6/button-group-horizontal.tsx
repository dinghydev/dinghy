import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUTTON_GROUP_HORIZONTAL = {
  _style:
    'swimlane;shape=mxgraph.bootstrap.anchor;strokeColor=#444444;fillColor=#ffffff;fontColor=#999999;fontStyle=0;childLayout=stackLayout;horizontal=0;startSize=0;horizontalStack=1;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 12.5,
}

export function ButtonGroupHorizontal(props: DiagramNodeProps) {
  return <Shape {...BUTTON_GROUP_HORIZONTAL} {...props} />
}
