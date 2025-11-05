import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELIXIR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/cxp/Elixir.svg;strokeColor=none;',
  },
  _original_width: 49,
  _original_height: 68,
}

export function Elixir(props: NodeProps) {
  return <Shape {...ELIXIR} {...props} _style={extendStyle(ELIXIR, props)} />
}
