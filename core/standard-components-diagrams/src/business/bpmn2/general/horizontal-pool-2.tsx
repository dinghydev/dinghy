import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HORIZONTAL_POOL_2 = {
  _style: {
    entity:
      'swimlane;html=1;childLayout=stackLayout;resizeParent=1;resizeParentMax=0;horizontal=0;startSize=20;horizontalStack=0;whiteSpace=wrap;',
  },
  _width: 480,
  _height: 360,
}

export function HorizontalPool2(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_POOL_2}
      {...props}
      _style={extendStyle(HORIZONTAL_POOL_2, props)}
    />
  )
}
