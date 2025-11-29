import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OTA_3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.ota_3;',
  },
  _original_width: 100,
  _original_height: 90,
}

export function Ota3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OTA_3)} />
}
