import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FULL_FOLDER = {
  _style:
    'image;html=1;image=img/lib/clip_art/general/Full_Folder_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function FullFolder(props: DiagramNodeProps) {
  return (
    <Shape
      {...FULL_FOLDER}
      {...props}
      _style={extendStyle(FULL_FOLDER, props)}
    />
  )
}
