import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABLE = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.table',
  },
  _width: 60,
  _height: 60,
}

export function Table(props: DiagramNodeProps) {
  return <Shape {...TABLE} {...props} _style={extendStyle(TABLE, props)} />
}
