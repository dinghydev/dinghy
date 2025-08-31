import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTROLS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Controls.svg;strokeColor=none;',
  },
  _width: 56.00000000000001,
  _height: 69,
}

export function Controls(props: DiagramNodeProps) {
  return (
    <Shape {...CONTROLS} {...props} _style={extendStyle(CONTROLS, props)} />
  )
}
