import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ORACLE_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.oracleServer;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _width: 123,
  _height: 142,
}

export function OracleServer(props: NodeProps) {
  return (
    <Shape
      {...ORACLE_SERVER}
      {...props}
      _style={extendStyle(ORACLE_SERVER, props)}
    />
  )
}
