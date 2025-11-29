import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERTICAL_POOL_1 = {
  _style: {
    entity:
      'swimlane;html=1;childLayout=stackLayout;resizeParent=1;resizeParentMax=0;startSize=20;whiteSpace=wrap;',
  },
  _width: 360,
  _height: 480,
}

export function VerticalPool1(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VERTICAL_POOL_1)} />
}
