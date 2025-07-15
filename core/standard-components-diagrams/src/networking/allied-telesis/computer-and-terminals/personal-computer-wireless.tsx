import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PERSONAL_COMPUTER_WIRELESS = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/Personal_Computer_Wireless.svg;',
  _width: 63,
  _height: 64.2,
}

export function PersonalComputerWireless(props: DiagramNodeProps) {
  return <Shape {...PERSONAL_COMPUTER_WIRELESS} {...props} />
}
