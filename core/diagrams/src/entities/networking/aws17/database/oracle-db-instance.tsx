import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ORACLE_DB_INSTANCE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.oracle_db_instance;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 64.5,
}

export function OracleDbInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...ORACLE_DB_INSTANCE}
      {...props}
      _style={extendStyle(ORACLE_DB_INSTANCE, props)}
    />
  )
}
