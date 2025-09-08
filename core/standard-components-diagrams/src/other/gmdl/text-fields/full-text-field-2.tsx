import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FULL_TEXT_FIELD_2 = {
  _style: {
    entity:
      'swimlane;shape=rect;strokeColor=#EEEEEE;fillColor=#ffffff;fontColor=#000000;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=0;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;shadow=1;',
  },
  _original_width: 0,
  _original_height: 298,
}

export function FullTextField2(props: DiagramNodeProps) {
  return (
    <Shape
      {...FULL_TEXT_FIELD_2}
      {...props}
      _style={extendStyle(FULL_TEXT_FIELD_2, props)}
    />
  )
}
