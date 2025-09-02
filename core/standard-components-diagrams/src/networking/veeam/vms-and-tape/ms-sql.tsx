import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MS_SQL = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.ms_sql;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function MsSql(props: DiagramNodeProps) {
  return <Shape {...MS_SQL} {...props} _style={extendStyle(MS_SQL, props)} />
}
