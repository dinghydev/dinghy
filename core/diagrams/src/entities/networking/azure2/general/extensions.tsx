import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXTENSIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Extensions.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 64,
}

export function Extensions(props: NodeProps) {
  return (
    <Shape {...EXTENSIONS} {...props} _style={extendStyle(EXTENSIONS, props)} />
  )
}
