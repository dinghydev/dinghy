import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CODE_FILE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.code_file;pointerEvents=1;',
  },
  _original_width: 47.5,
  _original_height: 50,
}

export function CodeFile(props: NodeProps) {
  return (
    <Shape {...CODE_FILE} {...props} _style={extendStyle(CODE_FILE, props)} />
  )
}
