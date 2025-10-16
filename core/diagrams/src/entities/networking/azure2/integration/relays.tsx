import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RELAYS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Relays.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 60,
}

export function Relays(props: DiagramNodeProps) {
  return <Shape {...RELAYS} {...props} _style={extendStyle(RELAYS, props)} />
}
