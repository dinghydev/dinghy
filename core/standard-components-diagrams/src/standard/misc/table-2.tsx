import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLE_2 = {
  _style: {
    group:
      'shape=table;html=1;whiteSpace=wrap;startSize=0;container=1;collapsible=0;childLayout=tableLayout;columnLines=0;rowLines=0;fontSize=16;strokeColor=default;',
  },
}

export function Table2(props: DiagramNodeProps) {
  return <Shape {...TABLE_2} {...props} />
}
