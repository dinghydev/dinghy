import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_BARE_METAL = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/server_bare_metal.svg;strokeColor=none;',
  _width: 96,
  _height: 20,
}

export function ServerBareMetal(props: DiagramNodeProps) {
  return <Shape {...SERVER_BARE_METAL} {...props} />
}
