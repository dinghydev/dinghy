import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_BOARDS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Boards.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AzureBoards(props: NodeProps) {
  return (
    <Shape
      {...AZURE_BOARDS}
      {...props}
      _style={extendStyle(AZURE_BOARDS, props)}
    />
  )
}
