import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOLDER_BLANK = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Folder_Blank.svg;strokeColor=none;',
  },
  _width: 69,
  _height: 56.00000000000001,
}

export function FolderBlank(props: DiagramNodeProps) {
  return (
    <Shape
      {...FOLDER_BLANK}
      {...props}
      _style={extendStyle(FOLDER_BLANK, props)}
    />
  )
}
