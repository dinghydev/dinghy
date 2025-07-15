import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTEXTUAL_SPLIT_ACTION_BAR_BRIGHT = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.contextual_split_action_bar_white;fillColor=#E6E6E6;',
  _width: 0,
  _height: 70,
}

export function ContextualSplitActionBarBright(props: DiagramNodeProps) {
  return <Shape {...CONTEXTUAL_SPLIT_ACTION_BAR_BRIGHT} {...props} />
}
