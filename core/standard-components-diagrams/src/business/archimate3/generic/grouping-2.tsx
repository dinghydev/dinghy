import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GROUPING_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;shape=mxgraph.archimate3.grouping;fillColor=none;dashed=1;',
  },
  _original_width: 60,
  _original_height: 35,
}

export function Grouping2(props: DiagramNodeProps) {
  return (
    <Shape {...GROUPING_2} {...props} _style={extendStyle(GROUPING_2, props)} />
  )
}
