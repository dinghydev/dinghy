import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARCHIVE_STORAGE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Archive_Storage.svg;strokeColor=none;',
  _width: 50,
  _height: 48,
}

export function ArchiveStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARCHIVE_STORAGE}
      {...props}
      _style={extendStyle(ARCHIVE_STORAGE, props)}
    />
  )
}
