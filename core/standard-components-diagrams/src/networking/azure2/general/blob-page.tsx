import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLOB_PAGE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Blob_Page.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 52,
}

export function BlobPage(props: DiagramNodeProps) {
  return (
    <Shape {...BLOB_PAGE} {...props} _style={extendStyle(BLOB_PAGE, props)} />
  )
}
