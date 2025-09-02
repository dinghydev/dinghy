import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SIMPLEDB_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.simpleDb2;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _original_width: 181.5,
  _original_height: 192.6,
}

export function Simpledb2(props: DiagramNodeProps) {
  return (
    <Shape {...SIMPLEDB_2} {...props} _style={extendStyle(SIMPLEDB_2, props)} />
  )
}
