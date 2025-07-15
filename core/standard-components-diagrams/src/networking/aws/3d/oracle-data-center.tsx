import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ORACLE_DATA_CENTER = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.oracleDataCenter;fillColor=#ffffff;strokeColor=#5E5E5E;aspect=fixed;',
  _width: 123,
  _height: 142,
}

export function OracleDataCenter(props: DiagramNodeProps) {
  return <Shape {...ORACLE_DATA_CENTER} {...props} />
}
