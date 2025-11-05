import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SOLUTIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/solutions.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function Solutions(props: NodeProps) {
  return (
    <Shape {...SOLUTIONS} {...props} _style={extendStyle(SOLUTIONS, props)} />
  )
}
