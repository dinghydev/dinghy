import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PIM = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/PIM.svg;strokeColor=none;',
  _width: 60,
  _height: 68,
}

export function Pim(props: DiagramNodeProps) {
  return <Shape {...PIM} {...props} _style={extendStyle(PIM, props)} />
}
