import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORAGE_BLOB = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.storage_blob;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function StorageBlob(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STORAGE_BLOB)} />
}
