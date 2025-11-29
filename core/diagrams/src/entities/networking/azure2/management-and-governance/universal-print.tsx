import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const UNIVERSAL_PRINT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Universal_Print.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 57.99999999999999,
}

export function UniversalPrint(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, UNIVERSAL_PRINT)} />
}
