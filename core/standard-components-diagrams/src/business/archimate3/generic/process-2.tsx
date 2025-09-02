import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROCESS_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.process;',
  },
  _original_width: 60,
  _original_height: 35,
}

export function Process2(props: DiagramNodeProps) {
  return (
    <Shape {...PROCESS_2} {...props} _style={extendStyle(PROCESS_2, props)} />
  )
}
