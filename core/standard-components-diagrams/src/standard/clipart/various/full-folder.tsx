import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FULL_FOLDER = {
  _style: 'image;html=1;image=img/lib/clip_art/general/Full_Folder_128x128.png',
  _width: 80,
  _height: 80,
}

export function FullFolder(props: DiagramNodeProps) {
  return <Shape {...FULL_FOLDER} {...props} />
}
