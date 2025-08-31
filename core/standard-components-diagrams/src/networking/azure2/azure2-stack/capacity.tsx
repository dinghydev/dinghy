import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CAPACITY = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Capacity.svg;strokeColor=none;',
  _width: 63,
  _height: 68,
}

export function Capacity(props: DiagramNodeProps) {
  return (
    <Shape {...CAPACITY} {...props} _style={extendStyle(CAPACITY, props)} />
  )
}
