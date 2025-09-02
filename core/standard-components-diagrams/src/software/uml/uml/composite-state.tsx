import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPOSITE_STATE = {
  _style: {
    entity:
      'swimlane;fontStyle=1;align=center;verticalAlign=middle;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=0;resizeLast=1;container=0;fontColor=#000000;collapsible=0;rounded=1;arcSize=30;strokeColor=#ff0000;fillColor=#ffffc0;swimlaneFillColor=#ffffc0;dropTarget=0;',
  },
  _original_width: 0,
  _original_height: 120,
}

export function CompositeState(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPOSITE_STATE}
      {...props}
      _style={extendStyle(COMPOSITE_STATE, props)}
    />
  )
}
