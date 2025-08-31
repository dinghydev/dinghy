import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PERSONAL_COMPUTER_WITH_SERVER = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/Personal_Computer_with_Server.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function PersonalComputerWithServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERSONAL_COMPUTER_WITH_SERVER}
      {...props}
      _style={extendStyle(PERSONAL_COMPUTER_WITH_SERVER, props)}
    />
  )
}
