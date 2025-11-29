import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TAB_BAR_BRIGHT = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.rrect;rSize=0;fillColor=#eeeeee;strokeColor=none;',
  },
  _width: 185,
  _height: 30,
}

export function TabBarBright(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TAB_BAR_BRIGHT)} />
}
