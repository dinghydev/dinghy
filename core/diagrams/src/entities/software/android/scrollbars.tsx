import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCROLLBARS = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.scrollbars2;fillColor=#999999;strokeColor=none;',
  },
  _original_width: 56,
  _original_height: 56,
}

export function Scrollbars(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SCROLLBARS)} />
}
