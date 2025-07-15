import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHELF = {
  _style: {
    group:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rackGeneral.shelf;container=1;collapsible=0',
    entity: {
      strokeColor: '#666666',
    },
  },
}

export function Shelf(props: DiagramNodeProps) {
  return <Shape {...SHELF} {...props} />
}
