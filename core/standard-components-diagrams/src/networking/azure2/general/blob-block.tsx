import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLOB_BLOCK = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Blob_Block.svg;strokeColor=none;',
  _width: 65,
  _height: 52,
}

export function BlobBlock(props: DiagramNodeProps) {
  return (
    <Shape {...BLOB_BLOCK} {...props} _style={extendStyle(BLOB_BLOCK, props)} />
  )
}
