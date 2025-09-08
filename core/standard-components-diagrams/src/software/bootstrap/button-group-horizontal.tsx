import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_GROUP_HORIZONTAL = {
  _style: {
    entity:
      'swimlane;shape=mxgraph.bootstrap.anchor;strokeColor=none;fillColor=#6C767D;fontColor=#ffffff;fontStyle=0;childLayout=stackLayout;horizontal=0;startSize=0;horizontalStack=1;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  },
  _original_width: 0,
  _original_height: 30,
}

export function ButtonGroupHorizontal(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_GROUP_HORIZONTAL}
      {...props}
      _style={extendStyle(BUTTON_GROUP_HORIZONTAL, props)}
    />
  )
}
