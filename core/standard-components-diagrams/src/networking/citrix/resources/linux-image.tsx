import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LINUX_IMAGE = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.linux_image;',
  },
  _width: 37.035000000000004,
  _height: 50,
}

export function LinuxImage(props: DiagramNodeProps) {
  return (
    <Shape
      {...LINUX_IMAGE}
      {...props}
      _style={extendStyle(LINUX_IMAGE, props)}
    />
  )
}
