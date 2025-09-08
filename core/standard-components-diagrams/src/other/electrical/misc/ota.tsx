import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OTA = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.ota_1;',
  },
  _original_width: 100,
  _original_height: 90,
}

export function Ota(props: DiagramNodeProps) {
  return <Shape {...OTA} {...props} _style={extendStyle(OTA, props)} />
}
