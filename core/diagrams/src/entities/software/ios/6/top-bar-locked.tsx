import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TOP_BAR_LOCKED = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.ios.iTopBarLocked;strokeWidth=1;sketch=0;',
  },
  _width: 0,
  _height: 15,
}

export function TopBarLocked(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TOP_BAR_LOCKED)} />
}
