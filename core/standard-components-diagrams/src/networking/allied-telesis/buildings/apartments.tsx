import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APARTMENTS = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/buildings/Apartments.svg;strokeColor=none;',
  },
  _original_width: 54,
  _original_height: 105,
}

export function Apartments(props: DiagramNodeProps) {
  return (
    <Shape {...APARTMENTS} {...props} _style={extendStyle(APARTMENTS, props)} />
  )
}
