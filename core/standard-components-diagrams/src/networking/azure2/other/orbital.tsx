import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ORBITAL = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Orbital.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Orbital(props: DiagramNodeProps) {
  return <Shape {...ORBITAL} {...props} _style={extendStyle(ORBITAL, props)} />
}
