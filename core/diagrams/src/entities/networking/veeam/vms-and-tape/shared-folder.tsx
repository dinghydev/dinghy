import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHARED_FOLDER = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.shared_folder;',
  },
  _original_width: 55.2,
  _original_height: 64,
}

export function SharedFolder(props: NodeProps) {
  return (
    <Shape
      {...SHARED_FOLDER}
      {...props}
      _style={extendStyle(SHARED_FOLDER, props)}
    />
  )
}
