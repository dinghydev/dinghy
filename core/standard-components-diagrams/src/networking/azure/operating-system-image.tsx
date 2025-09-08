import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OPERATING_SYSTEM_IMAGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.operating_system_image;',
  },
  _original_width: 50,
  _original_height: 50,
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
