import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPLIT_ACTION_BAR = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.split_action_bar;fillColor=#1A1A1A;',
  _width: 0,
  _height: 70,
}

export function SplitActionBar(props: DiagramNodeProps) {
  return <Shape {...SPLIT_ACTION_BAR} {...props} />
}
