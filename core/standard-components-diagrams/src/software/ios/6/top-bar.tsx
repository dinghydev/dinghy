import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOP_BAR = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.ios.iTopBar2;opacity=50;fillColor=#999999;strokeColor=#cccccc;strokeWidth=1;sketch=0;',
  },
  _original_width: 0,
  _original_height: 15,
}

export function TopBar(props: DiagramNodeProps) {
  return <Shape {...TOP_BAR} {...props} _style={extendStyle(TOP_BAR, props)} />
}
