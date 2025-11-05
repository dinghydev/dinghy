import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTEXTUAL_SPLIT_ACTION_BAR_LANDSCAPE = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.contextual_split_action_bar_landscape;fillColor=#002E3E;fontColor=#FFFFFF;',
  },
  _width: 0,
  _height: 70,
}

export function ContextualSplitActionBarLandscape(props: NodeProps) {
  return (
    <Shape
      {...CONTEXTUAL_SPLIT_ACTION_BAR_LANDSCAPE}
      {...props}
      _style={extendStyle(CONTEXTUAL_SPLIT_ACTION_BAR_LANDSCAPE, props)}
    />
  )
}
