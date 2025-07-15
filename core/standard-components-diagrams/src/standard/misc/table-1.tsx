import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLE_1 = {
  _style: {
    group:
      'shape=table;startSize=0;container=1;collapsible=0;childLayout=tableLayout;fontSize=16;',
  },
}

export function Table1(props: DiagramNodeProps) {
  return <Shape {...TABLE_1} {...props} />
}
