import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQL_REPORTING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.sql_reporting;',
  },
  _original_width: 40,
  _original_height: 50,
}

export function SqlReporting(props: DiagramNodeProps) {
  return (
    <Shape
      {...SQL_REPORTING}
      {...props}
      _style={extendStyle(SQL_REPORTING, props)}
    />
  )
}
