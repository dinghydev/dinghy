import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVER_BARE_METAL = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/server_bare_metal.svg;strokeColor=none;',
  },
  _width: 96,
  _height: 20,
}

export function ServerBareMetal(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SERVER_BARE_METAL)} />
}
