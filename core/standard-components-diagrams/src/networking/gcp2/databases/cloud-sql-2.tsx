import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_SQL_2 = {
  _style:
    'shape=mxgraph.gcp2.doubleRect;fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  _width: 0,
  _height: 68,
}

export function CloudSql2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_SQL_2}
      {...props}
      _style={extendStyle(CLOUD_SQL_2, props)}
    />
  )
}
