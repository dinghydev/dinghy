import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EMPTY_FOLDER = {
  _style:
    'image;html=1;image=img/lib/clip_art/general/Empty_Folder_128x128.png',
  _width: 80,
  _height: 80,
}

export function EmptyFolder(props: DiagramNodeProps) {
  return <Shape {...EMPTY_FOLDER} {...props} />
}
