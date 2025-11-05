import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PERSONAL_COMPUTER_WITH_SERVER = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/Personal_Computer_with_Server.svg;strokeColor=none;',
  },
  _original_width: 62.400000000000006,
  _original_height: 62.400000000000006,
}

export function PersonalComputerWithServer(props: NodeProps) {
  return (
    <Shape
      {...PERSONAL_COMPUTER_WITH_SERVER}
      {...props}
      _style={extendStyle(PERSONAL_COMPUTER_WITH_SERVER, props)}
    />
  )
}
