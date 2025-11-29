import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_INSTANCE_FOR_SAP = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Database_Instance_for_SAP.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 65.2,
}

export function DatabaseInstanceForSap(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, DATABASE_INSTANCE_FOR_SAP)} />
  )
}
