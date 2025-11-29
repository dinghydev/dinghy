import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FILE_CABINET = {
  _style: {
    entity:
      'shape=mxgraph.cisco.storage.file_cabinet;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 51,
  _original_height: 62,
}

export function FileCabinet(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FILE_CABINET)} />
}
