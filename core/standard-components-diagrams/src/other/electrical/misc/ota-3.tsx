import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OTA_3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.ota_3;',
  },
  _width: 100,
  _height: 90,
}

export function Ota3(props: DiagramNodeProps) {
  return <Shape {...OTA_3} {...props} _style={extendStyle(OTA_3, props)} />
}
