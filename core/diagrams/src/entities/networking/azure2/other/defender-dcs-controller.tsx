import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEFENDER_DCS_CONTROLLER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_DCS_Controller.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62.4,
}

export function DefenderDcsController(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, DEFENDER_DCS_CONTROLLER)} />
  )
}
