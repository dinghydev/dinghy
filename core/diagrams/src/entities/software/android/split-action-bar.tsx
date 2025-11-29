import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPLIT_ACTION_BAR = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.split_action_bar;fillColor=#1A1A1A;',
  },
  _width: 0,
  _height: 70,
}

export function SplitActionBar(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SPLIT_ACTION_BAR)} />
}
