import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SOLUTIONS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Solutions.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Solutions(props: NodeProps) {
  return (
    <Shape {...SOLUTIONS} {...props} _style={extendStyle(SOLUTIONS, props)} />
  )
}
