import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFENDER_PROGRAMABLE_BOARD = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Programable_Board.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function DefenderProgramableBoard(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFENDER_PROGRAMABLE_BOARD}
      {...props}
      _style={extendStyle(DEFENDER_PROGRAMABLE_BOARD, props)}
    />
  )
}
