import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRIODE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.thermionic_devices.triode;',
  },
  _original_width: 70,
  _original_height: 77,
}

export function Triode(props: DiagramNodeProps) {
  return <Shape {...TRIODE} {...props} _style={extendStyle(TRIODE, props)} />
}
