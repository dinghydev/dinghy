import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ORACLE_DB = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.oracle_db;',
  },
  _original_width: 34,
  _original_height: 34,
}

export function OracleDb(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ORACLE_DB)} />
}
