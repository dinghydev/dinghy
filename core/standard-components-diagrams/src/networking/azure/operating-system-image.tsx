import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OPERATING_SYSTEM_IMAGE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.operating_system_image;',
  _width: 50,
  _height: 50,
}

export function OperatingSystemImage(props: DiagramNodeProps) {
  return <Shape {...OPERATING_SYSTEM_IMAGE} {...props} />
}
