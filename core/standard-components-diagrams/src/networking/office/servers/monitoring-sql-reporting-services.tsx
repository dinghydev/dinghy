import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MONITORING_SQL_REPORTING_SERVICES = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.monitoring_sql_reporting_services;',
  _width: 50,
  _height: 59,
}

export function MonitoringSqlReportingServices(props: DiagramNodeProps) {
  return <Shape {...MONITORING_SQL_REPORTING_SERVICES} {...props} />
}
