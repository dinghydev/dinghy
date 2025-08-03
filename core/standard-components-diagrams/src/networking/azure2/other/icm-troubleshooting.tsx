import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICM_TROUBLESHOOTING = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/IcM_Troubleshooting.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function IcmTroubleshooting(props: DiagramNodeProps) {
  return <Shape {...ICM_TROUBLESHOOTING} {...props} />
}
