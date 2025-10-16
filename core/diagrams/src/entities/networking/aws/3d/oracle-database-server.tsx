import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ORACLE_DATABASE_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.oracleDbServer;fillColor=#ffffff;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _width: 123,
  _height: 133,
}

export function OracleDatabaseServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...ORACLE_DATABASE_SERVER}
      {...props}
      _style={extendStyle(ORACLE_DATABASE_SERVER, props)}
    />
  )
}
