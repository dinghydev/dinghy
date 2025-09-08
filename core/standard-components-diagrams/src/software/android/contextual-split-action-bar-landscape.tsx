import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONTEXTUAL_SPLIT_ACTION_BAR_LANDSCAPE = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.contextual_split_action_bar_landscape;fillColor=#002E3E;fontColor=#FFFFFF;',
  },
  _original_width: 0,
  _original_height: 70,
}

export function ContextualSplitActionBarLandscape(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTEXTUAL_SPLIT_ACTION_BAR_LANDSCAPE}
      {...props}
      _style={extendStyle(CONTEXTUAL_SPLIT_ACTION_BAR_LANDSCAPE, props)}
    />
  )
}
