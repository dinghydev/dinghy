import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIST = {
  _style:
    'swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;align=center;fontSize=14;',
  _width: 0,
  _height: 110,
}

export function List(props: DiagramNodeProps) {
  return <Shape {...LIST} {...props} />
}
