import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COLUMN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.column;',
  },
  _original_width: 52,
  _original_height: 43,
}

export function Column(props: DiagramNodeProps) {
  return <Shape {...COLUMN} {...props} _style={extendStyle(COLUMN, props)} />
}
