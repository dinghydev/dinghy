import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TETRODE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.thermionic_devices.tetrode;',
  },
  _original_width: 70,
  _original_height: 77,
}

export function Tetrode(props: DiagramNodeProps) {
  return <Shape {...TETRODE} {...props} _style={extendStyle(TETRODE, props)} />
}
