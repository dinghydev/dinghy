import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MONITORING_STORE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.monitoring_store;',
  },
  _original_width: 58,
  _original_height: 58,
}

export function MonitoringStore(props: DiagramNodeProps) {
  return (
    <Shape
      {...MONITORING_STORE}
      {...props}
      _style={extendStyle(MONITORING_STORE, props)}
    />
  )
}
