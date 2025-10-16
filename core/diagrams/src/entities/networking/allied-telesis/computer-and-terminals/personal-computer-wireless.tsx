import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PERSONAL_COMPUTER_WIRELESS = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/Personal_Computer_Wireless.svg;strokeColor=none;',
  },
  _original_width: 63,
  _original_height: 64.2,
}

export function PersonalComputerWireless(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERSONAL_COMPUTER_WIRELESS}
      {...props}
      _style={extendStyle(PERSONAL_COMPUTER_WIRELESS, props)}
    />
  )
}
