import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELIXIR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/cxp/Elixir.svg;strokeColor=none;',
  _width: 49,
  _height: 68,
}

export function Elixir(props: DiagramNodeProps) {
  return <Shape {...ELIXIR} {...props} _style={extendStyle(ELIXIR, props)} />
}
