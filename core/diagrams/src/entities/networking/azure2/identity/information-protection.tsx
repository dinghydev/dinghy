import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INFORMATION_PROTECTION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Azure_Information_Protection.svg;strokeColor=none;',
  },
  _original_width: 51.2,
  _original_height: 68,
}

export function InformationProtection(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, INFORMATION_PROTECTION)} />
  )
}
