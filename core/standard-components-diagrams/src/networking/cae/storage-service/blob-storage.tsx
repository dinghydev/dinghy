import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BLOB_STORAGE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Blog_Storage.svg;',
  _width: 50,
  _height: 46,
}

export function BlobStorage(props: DiagramNodeProps) {
  return <Shape {...BLOB_STORAGE} {...props} />
}
