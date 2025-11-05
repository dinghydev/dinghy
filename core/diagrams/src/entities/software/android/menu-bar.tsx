import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MENU_BAR = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.rrect;rSize=0;strokeColor=#888888;fillColor=#444444;',
  },
  _width: 0,
  _height: 50,
}

export function MenuBar(props: NodeProps) {
  return (
    <Shape {...MENU_BAR} {...props} _style={extendStyle(MENU_BAR, props)} />
  )
}
