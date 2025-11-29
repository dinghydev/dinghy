import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STYLISED_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.stylisedArrow;dy=0.6;dx=40;notch=15;feather=0.4;',
  },
  _width: 100,
  _height: 60,
}

export function StylisedArrow(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STYLISED_ARROW)} />
}
