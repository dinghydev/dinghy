import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLE = {
  _style: {
    group:
      'shape=table;html=1;whiteSpace=wrap;startSize=0;container=1;collapsible=0;childLayout=tableLayout;strokeWidth=2;',
  },
}

export function Table(props: DiagramNodeProps) {
  return <Shape {...TABLE} {...props} />
}
