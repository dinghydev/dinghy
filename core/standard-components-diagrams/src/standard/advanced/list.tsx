import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIST = {
  _style: {
    entity:
      'swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;html=1;',
  },
  _width: 0,
  _height: 110,
}

export function List(props: DiagramNodeProps) {
  return <Shape {...LIST} {...props} _style={extendStyle(LIST, props)} />
}
