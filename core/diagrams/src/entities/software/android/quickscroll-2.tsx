import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const QUICKSCROLL_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.quickscroll3;dy=0.5;fillColor=#33b5e5;strokeColor=#66D5F5;',
  },
  _width: 6,
  _height: 320,
}

export function Quickscroll2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, QUICKSCROLL_2)} />
}
