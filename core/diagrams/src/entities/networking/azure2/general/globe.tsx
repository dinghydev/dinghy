import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GLOBE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Globe.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 66,
}

export function Globe(props: NodeProps) {
  return <Shape {...GLOBE} {...props} _style={extendStyle(GLOBE, props)} />
}
