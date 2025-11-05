import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ORACLE_DATABASE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Oracle_Database.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function OracleDatabase(props: NodeProps) {
  return (
    <Shape
      {...ORACLE_DATABASE}
      {...props}
      _style={extendStyle(ORACLE_DATABASE, props)}
    />
  )
}
