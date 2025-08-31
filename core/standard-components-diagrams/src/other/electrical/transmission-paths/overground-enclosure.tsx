import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OVERGROUND_ENCLOSURE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.overground_enclosure;',
  },
  _width: 130,
  _height: 136,
}

export function OvergroundEnclosure(props: DiagramNodeProps) {
  return (
    <Shape
      {...OVERGROUND_ENCLOSURE}
      {...props}
      _style={extendStyle(OVERGROUND_ENCLOSURE, props)}
    />
  )
}
