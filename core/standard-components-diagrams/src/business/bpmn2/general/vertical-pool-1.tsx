import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VERTICAL_POOL_1 = {
  _style:
    'swimlane;html=1;childLayout=stackLayout;resizeParent=1;resizeParentMax=0;startSize=20;whiteSpace=wrap;',
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
