import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const START_END = {
  _style: {
    entity: 'html=1;dashed=0;whiteSpace=wrap;shape=mxgraph.dfd.start',
  },
  _original_width: 80,
  _original_height: 30,
}

export function StartEnd(props: DiagramNodeProps) {
  return (
    <Shape {...START_END} {...props} _style={extendStyle(START_END, props)} />
  )
}
