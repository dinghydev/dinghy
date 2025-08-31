import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOP_BAR_LOCKED = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.ios.iTopBarLocked;strokeWidth=1;sketch=0;',
  _width: 0,
  _height: 15,
}

export function TopBarLocked(props: DiagramNodeProps) {
  return (
    <Shape
      {...TOP_BAR_LOCKED}
      {...props}
      _style={extendStyle(TOP_BAR_LOCKED, props)}
    />
  )
}
