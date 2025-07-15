import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STATUS_BAR_PORTRAIT = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.statusBar;align=center;fillColor=#000000;strokeColor=#ffffff;fontColor=#ffffff;fontSize=10;sketch=0;',
  _width: 183.57,
  _height: 15.825,
}

export function StatusBarPortrait(props: DiagramNodeProps) {
  return <Shape {...STATUS_BAR_PORTRAIT} {...props} />
}
