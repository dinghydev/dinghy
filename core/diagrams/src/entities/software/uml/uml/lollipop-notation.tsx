import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOLLIPOP_NOTATION = {
  _style: {
    entity:
      'rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endArrow=halfCircle;endFill=0;endSize=6;strokeWidth=1;sketch=0;',
  },
  _width: 40,
  _height: 10,
}

export function LollipopNotation(props: NodeProps) {
  return (
    <Shape
      {...LOLLIPOP_NOTATION}
      {...props}
      _style={extendStyle(LOLLIPOP_NOTATION, props)}
    />
  )
}
