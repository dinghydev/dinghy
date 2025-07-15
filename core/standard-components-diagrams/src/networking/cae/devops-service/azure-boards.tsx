import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_BOARDS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Boards.svg;',
  _width: 50,
  _height: 50,
}

export function AzureBoards(props: DiagramNodeProps) {
  return <Shape {...AZURE_BOARDS} {...props} />
}
