import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PHOTOCELL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.thermionic_devices.photocell;',
  },
  _original_width: 70,
  _original_height: 87,
}

export function Photocell(props: DiagramNodeProps) {
  return (
    <Shape {...PHOTOCELL} {...props} _style={extendStyle(PHOTOCELL, props)} />
  )
}
