import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SONIC_DASH = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Sonic_Dash.svg;strokeColor=none;',
  _width: 62,
  _height: 68,
}

export function SonicDash(props: DiagramNodeProps) {
  return <Shape {...SONIC_DASH} {...props} />
}
