import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POLICY = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Policy.svg;strokeColor=none;',
  },
  _original_width: 45,
  _original_height: 50,
}

export function Policy(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, POLICY)} />
}
