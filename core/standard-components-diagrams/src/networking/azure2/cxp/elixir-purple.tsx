import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELIXIR_PURPLE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/cxp/Elixir_Purple.svg;',
  _width: 49,
  _height: 68,
}

export function ElixirPurple(props: DiagramNodeProps) {
  return <Shape {...ELIXIR_PURPLE} {...props} />
}
