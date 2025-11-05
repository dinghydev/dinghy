import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RECENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Recent.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Recent(props: NodeProps) {
  return <Shape {...RECENT} {...props} _style={extendStyle(RECENT, props)} />
}
