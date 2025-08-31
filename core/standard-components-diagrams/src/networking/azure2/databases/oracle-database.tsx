import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ORACLE_DATABASE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Oracle_Database.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function OracleDatabase(props: DiagramNodeProps) {
  return (
    <Shape
      {...ORACLE_DATABASE}
      {...props}
      _style={extendStyle(ORACLE_DATABASE, props)}
    />
  )
}
