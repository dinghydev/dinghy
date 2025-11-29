import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTION_BAR_BRIGHT = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.action_bar;fillColor=#E6E6E6;strokeColor=#c0c0c0;strokeWidth=2;whiteSpace=wrap;',
  },
  _width: 185,
  _height: 30,
}

export function ActionBarBright(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ACTION_BAR_BRIGHT)} />
}
