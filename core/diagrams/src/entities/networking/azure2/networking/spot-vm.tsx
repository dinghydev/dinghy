import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPOT_VM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Spot_VM.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62.8,
}

export function SpotVm(props: NodeProps) {
  return <Shape {...SPOT_VM} {...props} _style={extendStyle(SPOT_VM, props)} />
}
