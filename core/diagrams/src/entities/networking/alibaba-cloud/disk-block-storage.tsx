import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISK_BLOCK_STORAGE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.disk_block_storage;',
  },
  _original_width: 51.6,
  _original_height: 41.4,
}

export function DiskBlockStorage(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DISK_BLOCK_STORAGE)} />
}
