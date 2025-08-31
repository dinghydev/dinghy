import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DETONATION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Detonation.svg;strokeColor=none;',
  _width: 66,
  _height: 68,
}

export function Detonation(props: DiagramNodeProps) {
  return (
    <Shape {...DETONATION} {...props} _style={extendStyle(DETONATION, props)} />
  )
}
