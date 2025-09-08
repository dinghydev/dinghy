import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ORACLE_DATA_CENTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.oracleDataCenter;fillColor=#ffffff;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _original_width: 123,
  _original_height: 142,
}

export function OracleDataCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...ORACLE_DATA_CENTER}
      {...props}
      _style={extendStyle(ORACLE_DATA_CENTER, props)}
    />
  )
}
