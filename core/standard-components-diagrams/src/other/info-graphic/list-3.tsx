import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIST_3 = {
  _style:
    'verticalLabelPosition=middle;verticalAlign=top;html=1;shape=mxgraph.infographic.numberedEntryVert;dy=25;strokeColor=none;fontSize=17;fontColor=#FFFFFF;align=center;labelPosition=center;spacingTop=32;fontStyle=1;whiteSpace=wrap;fillColor=#AE4132;',
  _width: 2,
  _height: 160,
}

export function List3(props: DiagramNodeProps) {
  return <Shape {...LIST_3} {...props} />
}
