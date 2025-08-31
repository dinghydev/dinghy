import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIST = {
  _style: {
    entity:
      'swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 120,
}

export function List(props: DiagramNodeProps) {
  return <Shape {...LIST} {...props} _style={extendStyle(LIST, props)} />
}
