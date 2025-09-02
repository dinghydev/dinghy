import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIST_2 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=top;html=1;shape=mxgraph.infographic.numberedEntryVert;dy=25;strokeColor=none;fontSize=17;fontColor=#FFFFFF;align=center;labelPosition=center;spacingTop=32;fontStyle=1;whiteSpace=wrap;fillColor=#F2931E;',
  },
  _original_width: 1,
  _original_height: 160,
}

export function List2(props: DiagramNodeProps) {
  return <Shape {...LIST_2} {...props} _style={extendStyle(LIST_2, props)} />
}
