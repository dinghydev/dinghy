import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLASS = {
  _style: {
    entity:
      'swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 90,
}

export function Class(props: NodeProps) {
  return <Shape {...CLASS} {...props} _style={extendStyle(CLASS, props)} />
}
