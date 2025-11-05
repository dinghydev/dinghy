import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EMPTY_FOLDER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Empty_Folder_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function EmptyFolder(props: NodeProps) {
  return (
    <Shape
      {...EMPTY_FOLDER}
      {...props}
      _style={extendStyle(EMPTY_FOLDER, props)}
    />
  )
}
