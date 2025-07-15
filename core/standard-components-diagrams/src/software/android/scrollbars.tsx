import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCROLLBARS = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.scrollbars2;fillColor=#999999;strokeColor=none;',
  _width: 56,
  _height: 56,
}

export function Scrollbars(props: DiagramNodeProps) {
  return <Shape {...SCROLLBARS} {...props} />
}
