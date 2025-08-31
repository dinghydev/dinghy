import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ORBITAL = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Orbital.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Orbital(props: DiagramNodeProps) {
  return <Shape {...ORBITAL} {...props} _style={extendStyle(ORBITAL, props)} />
}
