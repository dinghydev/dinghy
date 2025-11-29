import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MONITORING_SQL_REPORTING_SERVICES = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.monitoring_sql_reporting_services;',
  },
  _original_width: 50,
  _original_height: 59,
}

export function MonitoringSqlReportingServices(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, MONITORING_SQL_REPORTING_SERVICES)}
    />
  )
}
