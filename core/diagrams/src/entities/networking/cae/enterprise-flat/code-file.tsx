import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CODE_FILE = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.code_file',
  },
  _original_width: 49,
  _original_height: 50,
}

export function CodeFile(props: DiagramNodeProps) {
  return (
    <Shape {...CODE_FILE} {...props} _style={extendStyle(CODE_FILE, props)} />
  )
}
