import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ORACLE_DATABASE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Oracle_Database.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
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
