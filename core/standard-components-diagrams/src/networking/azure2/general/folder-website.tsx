import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOLDER_WEBSITE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Folder_Website.svg;strokeColor=none;',
  _width: 68,
  _height: 56.00000000000001,
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
