import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FOLDER_WEBSITE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Folder_Website.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 56.00000000000001,
}

export function FolderWebsite(props: DiagramNodeProps) {
  return (
    <Shape
      {...FOLDER_WEBSITE}
      {...props}
      _style={extendStyle(FOLDER_WEBSITE, props)}
    />
  )
}
