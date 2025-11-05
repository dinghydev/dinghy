import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEFENDER_EXTERNAL_MANAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_External_Management.svg;strokeColor=none;',
  },
  _original_width: 66.16,
  _original_height: 68,
}

export function DefenderExternalManagement(props: NodeProps) {
  return (
    <Shape
      {...DEFENDER_EXTERNAL_MANAGEMENT}
      {...props}
      _style={extendStyle(DEFENDER_EXTERNAL_MANAGEMENT, props)}
    />
  )
}
