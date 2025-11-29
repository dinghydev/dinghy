import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEV_CONSOLE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Dev_Console.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 52,
}

export function DevConsole(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEV_CONSOLE)} />
}
