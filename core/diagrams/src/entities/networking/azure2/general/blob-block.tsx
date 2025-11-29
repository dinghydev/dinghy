import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BLOB_BLOCK = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Blob_Block.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 52,
}

export function BlobBlock(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BLOB_BLOCK)} />
}
