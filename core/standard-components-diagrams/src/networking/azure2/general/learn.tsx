import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LEARN = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Learn.svg;strokeColor=none;',
  _width: 48,
  _height: 70,
}

export function Learn(props: DiagramNodeProps) {
  return <Shape {...LEARN} {...props} _style={extendStyle(LEARN, props)} />
}
