import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RTOS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/preview/RTOS.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Rtos(props: DiagramNodeProps) {
  return <Shape {...RTOS} {...props} _style={extendStyle(RTOS, props)} />
}
