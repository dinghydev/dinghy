import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_INSTANCE_FOR_SAP = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Virtual_Instance_for_SAP.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62.839999999999996,
}

export function VirtualInstanceForSap(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, VIRTUAL_INSTANCE_FOR_SAP)} />
  )
}
