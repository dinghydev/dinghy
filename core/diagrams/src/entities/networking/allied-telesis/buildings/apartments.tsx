import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APARTMENTS = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/buildings/Apartments.svg;strokeColor=none;',
  },
  _width: 54,
  _height: 105,
}

export function Apartments(props: NodeProps) {
  return (
    <Shape {...APARTMENTS} {...props} _style={extendStyle(APARTMENTS, props)} />
  )
}
