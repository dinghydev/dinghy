import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FILE_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.file_2;pointerEvents=1;',
  },
  _original_width: 47.5,
  _original_height: 50,
}

export function File2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FILE_2)} />
}
