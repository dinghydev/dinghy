import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GAP_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#FFE0E0;shape=mxgraph.archimate3.gapIcon;',
  _width: 55,
  _height: 40,
}

export function Gap2(props: DiagramNodeProps) {
  return <Shape {...GAP_2} {...props} />
}
