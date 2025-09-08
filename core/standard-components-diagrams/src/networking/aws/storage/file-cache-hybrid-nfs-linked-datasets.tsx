import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FILE_CACHE_HYBRID_NFS_LINKED_DATASETS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.file_cache_hybrid_nfs_linked_datasets;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function FileCacheHybridNfsLinkedDatasets(props: DiagramNodeProps) {
  return (
    <Shape
      {...FILE_CACHE_HYBRID_NFS_LINKED_DATASETS}
      {...props}
      _style={extendStyle(FILE_CACHE_HYBRID_NFS_LINKED_DATASETS, props)}
    />
  )
}
