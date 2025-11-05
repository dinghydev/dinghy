import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NAS_NETWORK_ATTACHED_STORAGE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nas_network_attached_storage;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function NasNetworkAttachedStorage(props: NodeProps) {
  return (
    <Shape
      {...NAS_NETWORK_ATTACHED_STORAGE}
      {...props}
      _style={extendStyle(NAS_NETWORK_ATTACHED_STORAGE, props)}
    />
  )
}
