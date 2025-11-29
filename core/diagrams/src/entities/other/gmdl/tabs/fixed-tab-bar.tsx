import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIXED_TAB_BAR = {
  _style: {
    entity: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
  },
  _width: 358,
  _height: 642,
}

export function FixedTabBar(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FIXED_TAB_BAR)} />
}
