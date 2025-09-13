import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VERTICAL_POOL_1 = {
  _style: {
    entity:
      'swimlane;childLayout=stackLayout;resizeParent=1;resizeParentMax=0;startSize=20;html=1;',
  },
  _width: 360,
  _height: 480,
}

export function VerticalPool1(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_POOL_1}
      {...props}
      _style={extendStyle(VERTICAL_POOL_1, props)}
    />
  )
}
