import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TAB = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.tab2;strokeColor=#c0c0c0;',
  _width: 472,
  _height: 686,
}

export function Tab(props: DiagramNodeProps) {
  return <Shape {...TAB} {...props} />
}
