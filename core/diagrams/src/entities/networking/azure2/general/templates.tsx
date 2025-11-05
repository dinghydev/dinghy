import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEMPLATES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Templates.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 68,
}

export function Templates(props: NodeProps) {
  return (
    <Shape {...TEMPLATES} {...props} _style={extendStyle(TEMPLATES, props)} />
  )
}
