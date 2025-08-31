import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OTA = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.ota_1;',
  _width: 100,
  _height: 90,
}

export function Ota(props: DiagramNodeProps) {
  return <Shape {...OTA} {...props} _style={extendStyle(OTA, props)} />
}
