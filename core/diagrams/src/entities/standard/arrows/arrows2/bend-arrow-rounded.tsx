import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BEND_ARROW_ROUNDED = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.bendArrow;dy=15;dx=38;notch=0;arrowHead=55;rounded=1;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function BendArrowRounded(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BEND_ARROW_ROUNDED)} />
}
