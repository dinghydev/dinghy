import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WRITER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.writer;',
  },
  _original_width: 54,
  _original_height: 59,
}

export function Writer(props: DiagramNodeProps) {
  return <Shape {...WRITER} {...props} _style={extendStyle(WRITER, props)} />
}
