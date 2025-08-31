import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWERSHELL = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Powershell.svg;strokeColor=none;',
  },
  _width: 65,
  _height: 52,
}

export function Powershell(props: DiagramNodeProps) {
  return (
    <Shape {...POWERSHELL} {...props} _style={extendStyle(POWERSHELL, props)} />
  )
}
