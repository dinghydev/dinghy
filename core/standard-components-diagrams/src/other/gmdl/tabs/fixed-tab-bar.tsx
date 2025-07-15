import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIXED_TAB_BAR = {
  _style: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
  _width: 358,
  _height: 642,
}

export function FixedTabBar(props: DiagramNodeProps) {
  return <Shape {...FIXED_TAB_BAR} {...props} />
}
