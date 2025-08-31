import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EMPTY_FOLDER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Empty_Folder_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function EmptyFolder(props: DiagramNodeProps) {
  return (
    <Shape
      {...EMPTY_FOLDER}
      {...props}
      _style={extendStyle(EMPTY_FOLDER, props)}
    />
  )
}
