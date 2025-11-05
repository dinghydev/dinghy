import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STRIDE = {
  _style: {
    entity:
      'image;image=img/lib/atlassian/Stride_Logo.svg;html=1;strokeColor=none;',
  },
  _original_width: 69,
  _original_height: 57,
}

export function Stride(props: NodeProps) {
  return <Shape {...STRIDE} {...props} _style={extendStyle(STRIDE, props)} />
}
