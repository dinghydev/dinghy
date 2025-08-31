import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NAS_NETWORK_ATTACHED_STORAGE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nas_network_attached_storage;',
  _width: 30,
  _height: 30,
}

export function NasNetworkAttachedStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...NAS_NETWORK_ATTACHED_STORAGE}
      {...props}
      _style={extendStyle(NAS_NETWORK_ATTACHED_STORAGE, props)}
    />
  )
}
