import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PEERINGS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Peerings.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 57.92,
}

export function Peerings(props: DiagramNodeProps) {
  return (
    <Shape {...PEERINGS} {...props} _style={extendStyle(PEERINGS, props)} />
  )
}
