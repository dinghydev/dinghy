import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEV_CONSOLE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Dev_Console.svg;',
  _width: 65,
  _height: 52,
}

export function DevConsole(props: DiagramNodeProps) {
  return <Shape {...DEV_CONSOLE} {...props} />
}
