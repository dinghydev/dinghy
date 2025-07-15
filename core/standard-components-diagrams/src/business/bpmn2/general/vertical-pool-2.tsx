import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VERTICAL_POOL_2 = {
  _style:
    'swimlane;html=1;childLayout=stackLayout;resizeParent=1;resizeParentMax=0;startSize=20;horizontal=0;horizontalStack=1;whiteSpace=wrap;',
  _width: 380,
  _height: 480,
}

export function VerticalPool2(props: DiagramNodeProps) {
  return <Shape {...VERTICAL_POOL_2} {...props} />
}
