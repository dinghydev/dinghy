import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STRIDE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Stride_Logo.svg;strokeColor=none;',
  },
  _original_width: 69,
  _original_height: 57,
}

export function Stride(props: DiagramNodeProps) {
  return <Shape {...STRIDE} {...props} _style={extendStyle(STRIDE, props)} />
}
