import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERTICAL_POOL_2 = {
  _style: {
    entity:
      'swimlane;childLayout=stackLayout;resizeParent=1;resizeParentMax=0;startSize=20;horizontal=0;horizontalStack=1;',
  },
  _width: 380,
  _height: 480,
}

export function VerticalPool2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VERTICAL_POOL_2)} />
}
