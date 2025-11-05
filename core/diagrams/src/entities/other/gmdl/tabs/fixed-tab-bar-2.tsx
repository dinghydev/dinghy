import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIXED_TAB_BAR_2 = {
  _style: {
    entity:
      'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;fontFamily=Helvetica;fontSize=12;fontColor=default;',
  },
  _width: 358,
  _height: 642,
}

export function FixedTabBar2(props: NodeProps) {
  return (
    <Shape
      {...FIXED_TAB_BAR_2}
      {...props}
      _style={extendStyle(FIXED_TAB_BAR_2, props)}
    />
  )
}
