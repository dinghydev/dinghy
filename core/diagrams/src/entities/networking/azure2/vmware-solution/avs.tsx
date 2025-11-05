import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AVS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_vmware_solution/AVS.svg;strokeColor=none;',
  },
  _original_width: 70,
  _original_height: 56.00000000000001,
}

export function Avs(props: NodeProps) {
  return <Shape {...AVS} {...props} _style={extendStyle(AVS, props)} />
}
