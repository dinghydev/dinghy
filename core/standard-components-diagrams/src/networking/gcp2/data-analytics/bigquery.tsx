import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BIGQUERY = {
  _style: {
    entity:
      'fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _width: 0,
  _height: 60,
}

export function Bigquery(props: DiagramNodeProps) {
  return (
    <Shape {...BIGQUERY} {...props} _style={extendStyle(BIGQUERY, props)} />
  )
}
