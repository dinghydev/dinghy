import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MICROSOFT_SQL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.microsoft_sql;',
  },
  _original_width: 34,
  _original_height: 34,
}

export function MicrosoftSql(props: NodeProps) {
  return (
    <Shape
      {...MICROSOFT_SQL}
      {...props}
      _style={extendStyle(MICROSOFT_SQL, props)}
    />
  )
}
