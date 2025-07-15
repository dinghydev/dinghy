import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLE_1 = {
  _style: {
    group:
      'shape=table;startSize=30;container=1;collapsible=1;childLayout=tableLayout;fixedRows=1;rowLines=0;fontStyle=1;align=center;resizeLast=1;html=1;',
  },
}

export function Table1(props: DiagramNodeProps) {
  return <Shape {...TABLE_1} {...props} />
}
