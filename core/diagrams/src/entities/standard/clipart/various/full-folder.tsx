import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FULL_FOLDER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Full_Folder_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
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
