import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONDITIONAL_ACCESS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Conditional_Access.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 68,
}

export function ConditionalAccess(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONDITIONAL_ACCESS)} />
}
