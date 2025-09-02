import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PERSONAL_COMPUTER = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/Personal_Computer.svg;strokeColor=none;',
  },
  _original_width: 45.6,
  _original_height: 61.800000000000004,
}

export function PersonalComputer(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERSONAL_COMPUTER}
      {...props}
      _style={extendStyle(PERSONAL_COMPUTER, props)}
    />
  )
}
