import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPEN_SOURCE_TOOLS = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/applications/open_source_tools.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function OpenSourceTools(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OPEN_SOURCE_TOOLS)} />
}
