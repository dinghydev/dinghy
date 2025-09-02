import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOLLIPOP_NOTATION = {
  _style: {
    entity:
      'rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endArrow=halfCircle;endFill=0;endSize=6;strokeWidth=1;sketch=0;',
  },
  _original_width: 40,
  _original_height: 10,
}

export function LollipopNotation(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOLLIPOP_NOTATION}
      {...props}
      _style={extendStyle(LOLLIPOP_NOTATION, props)}
    />
  )
}
