import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANTICREEPAGE_DEVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.anticreepage_device;pointerEvents=1;',
  },
  _original_width: 130,
  _original_height: 88,
}

export function AnticreepageDevice(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANTICREEPAGE_DEVICE}
      {...props}
      _style={extendStyle(ANTICREEPAGE_DEVICE, props)}
    />
  )
}
