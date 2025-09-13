import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ANTICREEPAGE_DEVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.anticreepage_device;pointerEvents=1;',
  },
  _width: 130,
  _height: 88,
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
