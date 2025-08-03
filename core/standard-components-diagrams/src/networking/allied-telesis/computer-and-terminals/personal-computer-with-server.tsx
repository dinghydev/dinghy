import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PERSONAL_COMPUTER_WITH_SERVER = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/Personal_Computer_with_Server.svg;strokeColor=none;',
  _width: 62.400000000000006,
  _height: 62.400000000000006,
}

export function PersonalComputerWithServer(props: DiagramNodeProps) {
  return <Shape {...PERSONAL_COMPUTER_WITH_SERVER} {...props} />
}
