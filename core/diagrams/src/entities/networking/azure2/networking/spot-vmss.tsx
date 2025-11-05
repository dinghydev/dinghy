import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPOT_VMSS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Spot_VMSS.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 64,
}

export function SpotVmss(props: NodeProps) {
  return (
    <Shape {...SPOT_VMSS} {...props} _style={extendStyle(SPOT_VMSS, props)} />
  )
}
