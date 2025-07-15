import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ORACLE_DB_INSTANCE_ALTERNATE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.oracle_db_instance_alternate;',
  _width: 60,
  _height: 60,
}

export function OracleDbInstanceAlternate(props: DiagramNodeProps) {
  return <Shape {...ORACLE_DB_INSTANCE_ALTERNATE} {...props} />
}
