import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COLLATE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.flowchart.collate;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Collate(props: DiagramNodeProps) {
  return <Shape {...COLLATE} {...props} _style={extendStyle(COLLATE, props)} />
}
