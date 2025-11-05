import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AVS_VM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/AVS_VM.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62.8,
}

export function AvsVm(props: NodeProps) {
  return <Shape {...AVS_VM} {...props} _style={extendStyle(AVS_VM, props)} />
}
