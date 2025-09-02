import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICM_TROUBLESHOOTING = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/IcM_Troubleshooting.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
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
