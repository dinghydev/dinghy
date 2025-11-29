import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTEXTUAL_ACTION_BAR_BRIGHT = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.contextual_action_bar_white;fillColor=#E6E6E6;',
  },
  _width: 0,
  _height: 30,
}

export function ContextualActionBarBright(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CONTEXTUAL_ACTION_BAR_BRIGHT)}
    />
  )
}
