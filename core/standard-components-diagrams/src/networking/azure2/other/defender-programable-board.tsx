import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEFENDER_PROGRAMABLE_BOARD = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Programable_Board.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function DefenderProgramableBoard(props: DiagramNodeProps) {
  return <Shape {...DEFENDER_PROGRAMABLE_BOARD} {...props} />
}
