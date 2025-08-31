import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPERATING_SYSTEM_IMAGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.operating_system_image;',
  },
  _width: 60,
  _height: 60,
}

export function OperatingSystemImage(props: DiagramNodeProps) {
  return (
    <Shape
      {...OPERATING_SYSTEM_IMAGE}
      {...props}
      _style={extendStyle(OPERATING_SYSTEM_IMAGE, props)}
    />
  )
}
