import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOWNLOAD = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Download.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 67,
}

export function Download(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOWNLOAD)} />
}
