import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HEART = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Heart.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 60,
}

export function Heart(props: NodeProps) {
  return <Shape {...HEART} {...props} _style={extendStyle(HEART, props)} />
}
