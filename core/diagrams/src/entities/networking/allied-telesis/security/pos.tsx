import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POS = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/security/POS.svg;strokeColor=none;',
  },
  _original_width: 67.8,
  _original_height: 72,
}

export function Pos(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, POS)} />
}
