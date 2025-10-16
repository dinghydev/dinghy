import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CAPACITY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Capacity.svg;strokeColor=none;',
  },
  _original_width: 63,
  _original_height: 68,
}

export function Capacity(props: DiagramNodeProps) {
  return (
    <Shape {...CAPACITY} {...props} _style={extendStyle(CAPACITY, props)} />
  )
}
