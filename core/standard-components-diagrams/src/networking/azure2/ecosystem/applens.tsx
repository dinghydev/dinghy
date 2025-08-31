import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLENS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_ecosystem/Applens.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Applens(props: DiagramNodeProps) {
  return <Shape {...APPLENS} {...props} _style={extendStyle(APPLENS, props)} />
}
