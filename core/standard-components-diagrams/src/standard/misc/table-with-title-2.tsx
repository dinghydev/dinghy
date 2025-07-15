import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLE_WITH_TITLE_2 = {
  _style: {
    group:
      'shape=table;startSize=30;container=1;collapsible=0;childLayout=tableLayout;fixedRows=1;rowLines=0;fontStyle=0;strokeColor=default;fontSize=16;',
  },
}

export function TableWithTitle2(props: DiagramNodeProps) {
  return <Shape {...TABLE_WITH_TITLE_2} {...props} />
}
