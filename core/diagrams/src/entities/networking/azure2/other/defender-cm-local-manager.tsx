import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEFENDER_CM_LOCAL_MANAGER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_CM_Local_Manager.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function DefenderCmLocalManager(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, DEFENDER_CM_LOCAL_MANAGER)} />
  )
}
