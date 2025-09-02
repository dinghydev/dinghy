import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AQUILA = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Aquila.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 66.8,
}

export function Aquila(props: DiagramNodeProps) {
  return <Shape {...AQUILA} {...props} _style={extendStyle(AQUILA, props)} />
}
