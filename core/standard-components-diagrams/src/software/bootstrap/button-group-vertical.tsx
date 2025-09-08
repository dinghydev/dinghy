import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_GROUP_VERTICAL = {
  _style: {
    entity:
      'swimlane;shape=mxgraph.bootstrap.anchor;strokeColor=none;fillColor=#6C767D;fontColor=#ffffff;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=0;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  },
  _original_width: 0,
  _original_height: 180,
}

export function ButtonGroupVertical(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_GROUP_VERTICAL}
      {...props}
      _style={extendStyle(BUTTON_GROUP_VERTICAL, props)}
    />
  )
}
