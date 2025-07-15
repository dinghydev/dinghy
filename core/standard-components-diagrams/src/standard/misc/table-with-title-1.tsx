import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLE_WITH_TITLE_1 = {
  _style: {
    group:
      'shape=table;startSize=30;container=1;collapsible=0;childLayout=tableLayout;strokeColor=default;fontSize=16;',
  },
}

export function TableWithTitle1(props: DiagramNodeProps) {
  return <Shape {...TABLE_WITH_TITLE_1} {...props} />
}
