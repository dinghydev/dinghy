import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SQL_REPORTING = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.sql_reporting;',
  _width: 40,
  _height: 50,
}

export function SqlReporting(props: DiagramNodeProps) {
  return <Shape {...SQL_REPORTING} {...props} />
}
