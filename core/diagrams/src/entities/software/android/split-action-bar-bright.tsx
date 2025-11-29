import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPLIT_ACTION_BAR_BRIGHT = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.split_action_bar;fillColor=#E6E6E6;',
  },
  _width: 0,
  _height: 70,
}

export function SplitActionBarBright(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SPLIT_ACTION_BAR_BRIGHT)} />
  )
}
