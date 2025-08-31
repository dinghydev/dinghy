import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OTA_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.ota_2;',
  },
  _width: 100,
  _height: 90,
}

export function Ota2(props: DiagramNodeProps) {
  return <Shape {...OTA_2} {...props} _style={extendStyle(OTA_2, props)} />
}
