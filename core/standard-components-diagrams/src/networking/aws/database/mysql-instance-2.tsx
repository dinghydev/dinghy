import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MYSQL_INSTANCE_2 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.rds_mysql_instance_alt;',
  },
  _width: 60,
  _height: 60,
}

export function MysqlInstance2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MYSQL_INSTANCE_2}
      {...props}
      _style={extendStyle(MYSQL_INSTANCE_2, props)}
    />
  )
}
