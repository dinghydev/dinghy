import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIST_GROUP = {
  _style: {
    entity:
      'swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=0;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;strokeColor=none;fillColor=none;',
  },
  _width: 0,
  _height: 120,
}

export function ListGroup(props: DiagramNodeProps) {
  return (
    <Shape {...LIST_GROUP} {...props} _style={extendStyle(LIST_GROUP, props)} />
  )
}
