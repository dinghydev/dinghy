import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GROUPING = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;shape=mxgraph.archimate3.application;appType=grouping;archiType=square;dashed=1;fillColor=none;',
  },
  _width: 150,
  _height: 75,
}

export function Grouping(props: DiagramNodeProps) {
  return (
    <Shape {...GROUPING} {...props} _style={extendStyle(GROUPING, props)} />
  )
}
