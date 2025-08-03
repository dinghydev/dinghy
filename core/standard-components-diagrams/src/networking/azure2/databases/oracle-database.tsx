import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ORACLE_DATABASE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Oracle_Database.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function OracleDatabase(props: DiagramNodeProps) {
  return <Shape {...ORACLE_DATABASE} {...props} />
}
