import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REMOTE_STORAGE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.remote_storage;',
  },
  _original_width: 46.4,
  _original_height: 46.4,
}

export function RemoteStorage(props: NodeProps) {
  return (
    <Shape
      {...REMOTE_STORAGE}
      {...props}
      _style={extendStyle(REMOTE_STORAGE, props)}
    />
  )
}
