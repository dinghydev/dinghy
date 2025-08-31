import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWERAPPS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/PowerApps.svg;strokeColor=none;',
  _width: 68,
  _height: 65.16,
}

export function Powerapps(props: DiagramNodeProps) {
  return (
    <Shape {...POWERAPPS} {...props} _style={extendStyle(POWERAPPS, props)} />
  )
}
