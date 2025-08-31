import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICM_TROUBLESHOOTING = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/IcM_Troubleshooting.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function IcmTroubleshooting(props: DiagramNodeProps) {
  return (
    <Shape
      {...ICM_TROUBLESHOOTING}
      {...props}
      _style={extendStyle(ICM_TROUBLESHOOTING, props)}
    />
  )
}
