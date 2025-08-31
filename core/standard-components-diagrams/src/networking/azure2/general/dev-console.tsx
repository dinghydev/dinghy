import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEV_CONSOLE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Dev_Console.svg;strokeColor=none;',
  _width: 65,
  _height: 52,
}

export function DevConsole(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEV_CONSOLE}
      {...props}
      _style={extendStyle(DEV_CONSOLE, props)}
    />
  )
}
