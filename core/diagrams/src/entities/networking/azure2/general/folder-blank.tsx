import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FOLDER_BLANK = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Folder_Blank.svg;strokeColor=none;',
  },
  _original_width: 69,
  _original_height: 56.00000000000001,
}

export function FolderBlank(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FOLDER_BLANK)} />
}
