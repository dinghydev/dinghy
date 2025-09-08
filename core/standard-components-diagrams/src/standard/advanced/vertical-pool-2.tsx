import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VERTICAL_POOL_2 = {
  _style: {
    entity:
      'swimlane;childLayout=stackLayout;resizeParent=1;resizeParentMax=0;startSize=20;horizontal=0;horizontalStack=1;',
  },
  _original_width: 380,
  _original_height: 480,
}

export function VerticalPool2(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_POOL_2}
      {...props}
      _style={extendStyle(VERTICAL_POOL_2, props)}
    />
  )
}
