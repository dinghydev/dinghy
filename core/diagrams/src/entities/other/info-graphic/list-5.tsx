import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIST_5 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=top;html=1;shape=mxgraph.infographic.numberedEntryVert;dy=25;strokeColor=none;fontSize=17;fontColor=#FFFFFF;align=center;labelPosition=center;spacingTop=32;fontStyle=1;whiteSpace=wrap;fillColor=#12AAB5;',
  },
  _width: 4,
  _height: 160,
}

export function List5(props: NodeProps) {
  return <Shape {...LIST_5} {...props} _style={extendStyle(LIST_5, props)} />
}
