import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POSTGRE_SQL_INSTANCE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.rds_postgresql_instance;',
  _width: 60,
  _height: 60,
}

export function PostgreSqlInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...POSTGRE_SQL_INSTANCE}
      {...props}
      _style={extendStyle(POSTGRE_SQL_INSTANCE, props)}
    />
  )
}
