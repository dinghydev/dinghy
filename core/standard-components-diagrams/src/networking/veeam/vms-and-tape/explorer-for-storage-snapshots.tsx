import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXPLORER_FOR_STORAGE_SNAPSHOTS = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.explorer_for_storage_snapshots;',
  _width: 44.8,
  _height: 44.8,
}

export function ExplorerForStorageSnapshots(props: DiagramNodeProps) {
  return <Shape {...EXPLORER_FOR_STORAGE_SNAPSHOTS} {...props} />
}
