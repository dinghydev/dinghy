import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_BOARDS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Boards.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function AzureBoards(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_BOARDS}
      {...props}
      _style={extendStyle(AZURE_BOARDS, props)}
    />
  )
}
