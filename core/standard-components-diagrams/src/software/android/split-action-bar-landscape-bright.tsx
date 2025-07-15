import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPLIT_ACTION_BAR_LANDSCAPE_BRIGHT = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.split_action_bar_landscape;fillColor=#E6E6E6;',
  _width: 0,
  _height: 70,
}

export function SplitActionBarLandscapeBright(props: DiagramNodeProps) {
  return <Shape {...SPLIT_ACTION_BAR_LANDSCAPE_BRIGHT} {...props} />
}
