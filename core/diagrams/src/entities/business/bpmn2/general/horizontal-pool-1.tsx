import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HORIZONTAL_POOL_1 = {
  _style: {
    entity:
      'swimlane;html=1;childLayout=stackLayout;resizeParent=1;resizeParentMax=0;horizontal=1;startSize=20;horizontalStack=0;whiteSpace=wrap;',
  },
  _width: 480,
  _height: 380,
}

export function HorizontalPool1(props: NodeProps) {
  return (
    <Shape
      {...HORIZONTAL_POOL_1}
      {...props}
      _style={extendStyle(HORIZONTAL_POOL_1, props)}
    />
  )
}
