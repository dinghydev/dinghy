import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BLOB_BLOCK = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Blob_Block.svg;',
  _width: 65,
  _height: 52,
}

export function BlobBlock(props: DiagramNodeProps) {
  return <Shape {...BLOB_BLOCK} {...props} />
}
