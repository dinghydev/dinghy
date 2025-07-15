import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PERSONAL_COMPUTER = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/Personal_Computer.svg;',
  _width: 45.6,
  _height: 61.800000000000004,
}

export function PersonalComputer(props: DiagramNodeProps) {
  return <Shape {...PERSONAL_COMPUTER} {...props} />
}
