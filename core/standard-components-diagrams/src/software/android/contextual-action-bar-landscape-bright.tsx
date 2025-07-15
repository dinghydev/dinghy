import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTEXTUAL_ACTION_BAR_LANDSCAPE_BRIGHT = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.contextual_action_bar_landscape_white;fillColor=#E6E6E6;',
  _width: 0,
  _height: 30,
}

export function ContextualActionBarLandscapeBright(props: DiagramNodeProps) {
  return <Shape {...CONTEXTUAL_ACTION_BAR_LANDSCAPE_BRIGHT} {...props} />
}
