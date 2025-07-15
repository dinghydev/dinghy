import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DISK_BLOCK_STORAGE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.disk_block_storage;',
  _width: 51.6,
  _height: 41.4,
}

export function DiskBlockStorage(props: DiagramNodeProps) {
  return <Shape {...DISK_BLOCK_STORAGE} {...props} />
}
