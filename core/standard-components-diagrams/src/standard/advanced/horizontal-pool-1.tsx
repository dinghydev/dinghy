import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HORIZONTAL_POOL_1 = {
  _style: {
    entity:
      'swimlane;childLayout=stackLayout;resizeParent=1;resizeParentMax=0;horizontal=1;startSize=20;horizontalStack=0;html=1;',
  },
  _original_width: 480,
  _original_height: 380,
}

export function HorizontalPool1(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_POOL_1}
      {...props}
      _style={extendStyle(HORIZONTAL_POOL_1, props)}
    />
  )
}
