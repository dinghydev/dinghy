import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPOT_VMSS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Spot_VMSS.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 64,
}

export function SpotVmss(props: DiagramNodeProps) {
  return (
    <Shape {...SPOT_VMSS} {...props} _style={extendStyle(SPOT_VMSS, props)} />
  )
}
