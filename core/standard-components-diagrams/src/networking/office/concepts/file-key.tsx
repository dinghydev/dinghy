import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FILE_KEY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.file_key;',
  },
  _original_width: 48,
  _original_height: 53,
}

export function FileKey(props: DiagramNodeProps) {
  return (
    <Shape {...FILE_KEY} {...props} _style={extendStyle(FILE_KEY, props)} />
  )
}
