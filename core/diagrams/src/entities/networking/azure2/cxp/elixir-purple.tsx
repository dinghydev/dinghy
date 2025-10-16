import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ELIXIR_PURPLE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/cxp/Elixir_Purple.svg;strokeColor=none;',
  },
  _original_width: 49,
  _original_height: 68,
}

export function ElixirPurple(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELIXIR_PURPLE}
      {...props}
      _style={extendStyle(ELIXIR_PURPLE, props)}
    />
  )
}
