import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTEXTUAL_SPLIT_ACTION_BAR = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.contextual_split_action_bar;fillColor=#002E3E;fontColor=#FFFFFF;',
  },
  _original_width: 0,
  _original_height: 70,
}

export function ContextualSplitActionBar(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTEXTUAL_SPLIT_ACTION_BAR}
      {...props}
      _style={extendStyle(CONTEXTUAL_SPLIT_ACTION_BAR, props)}
    />
  )
}
