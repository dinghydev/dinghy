import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOLLIPOP_NOTATION_2 = {
  _style: {
    entity:
      'rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endArrow=oval;endFill=0;sketch=0;sourcePerimeterSpacing=0;targetPerimeterSpacing=0;endSize=10;',
  },
  _original_width: 1,
  _original_height: 10,
}

export function LollipopNotation2(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOLLIPOP_NOTATION_2}
      {...props}
      _style={extendStyle(LOLLIPOP_NOTATION_2, props)}
    />
  )
}
