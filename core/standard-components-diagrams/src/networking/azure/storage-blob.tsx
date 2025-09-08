import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STORAGE_BLOB = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.storage_blob;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function StorageBlob(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORAGE_BLOB}
      {...props}
      _style={extendStyle(STORAGE_BLOB, props)}
    />
  )
}
