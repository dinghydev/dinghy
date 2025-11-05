import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BLOB_STORAGE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/BlobBlock.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 42,
}

export function BlobStorage(props: NodeProps) {
  return (
    <Shape
      {...BLOB_STORAGE}
      {...props}
      _style={extendStyle(BLOB_STORAGE, props)}
    />
  )
}
