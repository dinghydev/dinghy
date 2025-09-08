import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WINDOWS_IMAGE = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.windows_image;',
  },
  _original_width: 37.035000000000004,
  _original_height: 50,
}

export function WindowsImage(props: DiagramNodeProps) {
  return (
    <Shape
      {...WINDOWS_IMAGE}
      {...props}
      _style={extendStyle(WINDOWS_IMAGE, props)}
    />
  )
}
