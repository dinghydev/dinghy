import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OVERGROUND_ENCLOSURE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.overground_enclosure;',
  },
  _original_width: 130,
  _original_height: 136,
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
