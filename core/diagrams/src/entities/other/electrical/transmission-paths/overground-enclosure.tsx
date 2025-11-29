import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OVERGROUND_ENCLOSURE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.overground_enclosure;',
  },
  _width: 130,
  _height: 136,
}

export function OvergroundEnclosure(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OVERGROUND_ENCLOSURE)} />
}
