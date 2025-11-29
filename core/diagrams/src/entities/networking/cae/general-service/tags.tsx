import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TAGS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Tags.svg;strokeColor=none;',
  },
  _original_width: 42,
  _original_height: 50,
}

export function Tags(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TAGS)} />
}
