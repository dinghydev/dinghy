import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIXED_TAB_BAR_2 = {
  _style:
    'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;fontFamily=Helvetica;fontSize=12;fontColor=default;',
  _width: 358,
  _height: 642,
}

export function FixedTabBar2(props: DiagramNodeProps) {
  return <Shape {...FIXED_TAB_BAR_2} {...props} />
}
