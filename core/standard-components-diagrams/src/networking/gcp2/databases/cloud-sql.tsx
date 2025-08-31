import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_SQL = {
  _style:
    'fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  _width: 0,
  _height: 60,
}

export function CloudSql(props: DiagramNodeProps) {
  return (
    <Shape {...CLOUD_SQL} {...props} _style={extendStyle(CLOUD_SQL, props)} />
  )
}
