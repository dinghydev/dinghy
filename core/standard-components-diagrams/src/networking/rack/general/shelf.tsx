import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SHELF = {
  _style: {
    container:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rackGeneral.shelf;container=1;collapsible=0',
    entity: {
      strokeColor: '#666666',
    },
  },
}

export function Shelf(props: DiagramNodeProps) {
  return <Shape {...SHELF} {...props} _style={extendStyle(SHELF, props)} />
}
