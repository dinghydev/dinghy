import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TAILED_ARROW_WITH_NOTCH = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.tailedNotchedArrow;dy1=10;dx1=20;notch=20;arrowHead=20;dx2=25;dy2=30;',
  },
  _width: 100,
  _height: 60,
}

export function TailedArrowWithNotch(props: NodeProps) {
  return (
    <Shape
      {...TAILED_ARROW_WITH_NOTCH}
      {...props}
      _style={extendStyle(TAILED_ARROW_WITH_NOTCH, props)}
    />
  )
}
