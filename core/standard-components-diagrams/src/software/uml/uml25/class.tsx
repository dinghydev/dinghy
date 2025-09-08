import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLASS = {
  _style: {
    entity:
      'swimlane;fontStyle=1;align=center;verticalAlign=middle;childLayout=stackLayout;horizontal=1;startSize=29;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;html=1;whiteSpace=wrap;',
  },
  _original_width: 0,
  _original_height: 79,
}

export function Class(props: DiagramNodeProps) {
  return <Shape {...CLASS} {...props} _style={extendStyle(CLASS, props)} />
}
