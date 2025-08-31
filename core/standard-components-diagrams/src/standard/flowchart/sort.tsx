import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SORT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.flowchart.sort;',
  },
  _width: 60,
  _height: 60,
}

export function Sort(props: DiagramNodeProps) {
  return <Shape {...SORT} {...props} _style={extendStyle(SORT, props)} />
}
